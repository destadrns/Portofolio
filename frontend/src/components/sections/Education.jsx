import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
    {
        type: 'Gelar',
        title: 'Sarjana Informatika',
        institution: 'Universitas Amikom Yogyakarta',
        year: '2023 - Sekarang',
        icon: <GraduationCap size={24} />
    }
]

const Education = () => {
    return (
        <div className="w-full max-w-4xl px-4 py-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Pendidikan </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors"
                    >
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                            {item.icon}
                        </div>
                        <div>
                            <span className="text-xs text-primary font-bold uppercase tracking-wider">{item.type}</span>
                            <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{item.institution}</p>
                            <span className="text-gray-500 text-xs mt-2 block">{item.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Education
