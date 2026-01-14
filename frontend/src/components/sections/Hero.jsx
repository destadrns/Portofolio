import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react'

const Hero = () => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <div className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient & Particles */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Extra coverage for mobile bounce/address bar */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />

            {/* Floating Particles (Simplified) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-cyan-500/20 rounded-full blur-xl"
                        initial={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            top: [null, `${Math.random() * 100}%`],
                            left: [null, `${Math.random() * 100}%`]
                        }}
                        transition={{
                            duration: 20 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "mirror"
                        }}
                        style={{
                            width: `${Math.random() * 200}px`,
                            height: `${Math.random() * 200}px`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-cyan-400 font-mono mb-2 text-xs md:text-base tracking-wider"
                >
                    HALO, SAYA
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 leading-tight"
                >
                    DESTA ADRIYAN <span className="text-primary block md:inline">SAPUTRA</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="h-auto md:h-12 mb-6 md:mb-8 text-sm md:text-2xl text-gray-400 font-light flex items-center justify-center gap-2"
                >
                    <span className="typing-effect">Ai Engineer & Data Analyst</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full px-4"
                >
                    <a
                        href="https://www.linkedin.com/in/dstaasptra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all overflow-hidden flex justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center gap-2 font-medium text-sm md:text-base">
                            <Linkedin size={16} className="md:w-[18px] md:h-[18px]" /> LinkedIn
                        </span>
                    </a>

                    <a
                        href="https://github.com/destadrns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-primary hover:bg-blue-600 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] flex justify-center"
                    >
                        <span className="flex items-center gap-2 font-medium text-sm md:text-base">
                            <Github size={16} className="md:w-[18px] md:h-[18px]" /> GitHub
                        </span>
                    </a>
                </motion.div>
            </div >

            {/* Scroll Indicator */}
            < motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={24} />
            </motion.div >
        </div >
    )
}

export default Hero
