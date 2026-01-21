import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader, ShieldCheck } from 'lucide-react'
import axios from 'axios'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    // Visual Captcha State
    const [captchaStatus, setCaptchaStatus] = useState('idle') // idle, verifying, success

    const handleCaptchaClick = () => {
        if (captchaStatus === 'success') return
        setCaptchaStatus('verifying')
        // Simulate network verification
        setTimeout(() => {
            setCaptchaStatus('success')
        }, 1500)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Captcha Verification
        if (captchaStatus !== 'success') {
            setForm(prev => ({ ...prev, error: 'Silakan verifikasi bahwa Anda bukan robot.' }))
            setStatus('error')
            setTimeout(() => setStatus('idle'), 2000)
            return
        }

        setStatus('loading')
        try {
            // Use relative path for production (Vercel), localhost for dev
            const apiUrl = import.meta.env.PROD
                ? '/api/contact'
                : 'http://localhost:5000/api/contact'

            await axios.post(apiUrl, form)

            setStatus('success')
            setForm({ name: '', email: '', message: '' })
            setCaptchaStatus('idle')

            setTimeout(() => setStatus('idle'), 3000)
        } catch (err) {
            console.error('Contact Form Error:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Gagal mengirim pesan';
            setStatus('error');
            setForm(prev => ({ ...prev, error: errorMessage }));
        }
    }

    return (
        <div className="w-full max-w-2xl px-4 text-center py-4">
            <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
            <p className="text-gray-400 mb-8">Punya proyek impian atau sekadar ingin menyapa?</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-400">Nama</label>
                        <input
                            type="text"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Nama Anda"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input
                            type="email"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Email Anda@example.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Pesan</label>
                    <textarea
                        required
                        rows="5"
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Ceritakan tentang proyek Anda..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                </div>

                {/* Visual Captcha Clone */}
                <div
                    className="w-full md:w-fit bg-[#f9f9f9] text-black p-3 rounded-sm border border-[#d3d3d3] shadow-sm flex items-center gap-4 select-none cursor-pointer hover:bg-[#f0f0f0] transition-colors"
                    onClick={handleCaptchaClick}
                >
                    <div className={`w-7 h-7 bg-white border-2 rounded-sm flex items-center justify-center transition-all ${captchaStatus === 'success' ? 'border-transparent' : 'border-[#c1c1c1]'}`}>
                        {captchaStatus === 'idle' && (
                            <div className="w-full h-full"></div>
                        )}
                        {captchaStatus === 'verifying' && (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                                <Loader size={16} className="text-blue-500" />
                            </motion.div>
                        )}
                        {captchaStatus === 'success' && (
                            <CheckCircle size={28} className="text-green-500" fill="white" />
                        )}
                    </div>
                    <span className="text-sm font-medium text-[#2d2d2d] mr-8">I'm not a robot</span>
                    <div className="flex flex-col items-center justify-center ml-auto border-l border-gray-300 pl-3 md:pl-0">
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="logo" className="w-6 h-6 opacity-70 mb-1" />
                        <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`mt-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === 'success' ? 'bg-green-500' :
                        status === 'error' ? 'bg-red-500' :
                            'bg-primary hover:bg-blue-600'
                        }`}
                >
                    {status === 'idle' && <><Send size={18} /> Kirim Pesan</>}
                    {status === 'loading' && <span className="animate-pulse">Mengirim...</span>}
                    {status === 'success' && <><CheckCircle size={18} /> Pesan Terkirim!</>}
                    {status === 'error' && <><AlertCircle size={18} /> {form.error || 'Gagal. Coba Lagi.'}</>}
                </button>
            </form>

            <footer className="mt-20 text-gray-600 text-sm">
                © 2026 Desta Adriyan Saputra. Dibuat dengan React, Vue, & Node.js.
            </footer>
        </div>
    )
}

export default Contact
