import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import axios from 'axios'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    // Captcha State
    const [captcha, setCaptcha] = useState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10)
    })
    const [userCaptcha, setUserCaptcha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Captcha Verification
        if (parseInt(userCaptcha) !== captcha.num1 + captcha.num2) {
            setForm(prev => ({ ...prev, error: 'Hitungan salah, coba lagi!' }))
            setStatus('error')
            // Reset error msg after 2s
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
            setUserCaptcha('')
            // Regenerate Captcha
            setCaptcha({
                num1: Math.floor(Math.random() * 10),
                num2: Math.floor(Math.random() * 10)
            })

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

                {/* Verification */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Verifikasi (Bukan Robot)</label>
                    <div className="flex items-center gap-4">
                        <span className="text-white font-bold text-lg bg-white/10 px-4 py-2 rounded-lg select-none">
                            {captcha.num1} + {captcha.num2} = ?
                        </span>
                        <input
                            type="number"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors w-24 text-center"
                            placeholder="Hasil"
                            value={userCaptcha}
                            onChange={(e) => setUserCaptcha(e.target.value)}
                        />
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
