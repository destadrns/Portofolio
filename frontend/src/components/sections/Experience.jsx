import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
    {
        role: 'Machine Learning Engineer',
        company: 'Project: ETH Price Prediction',
        period: '2024',
        desc: 'Mengimplementasikan algoritma Gradient Boosting untuk analisis tren harga kripto. Melakukan tuning hyperparameter dan evaluasi metrik model untuk memastikan validitas prediksi, serta analisis teknikal mendalam.',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Gradient Boosting']
    },
    {
        role: 'Data Analyst',
        company: 'Project: Smart Home Energy',
        period: '2023',
        desc: 'Melaksanakan Exploratory Data Analysis (EDA) dan preprocessing data kompleks. Membangun model prediktif untuk pola konsumsi energi menggunakan ekosistem Python (NumPy, Pandas).',
        tech: ['Python', 'NumPy', 'Jupyter Notebook', 'Data Analytics']
    },
    {
        role: 'Frontend Developer',
        company: 'Project: Rentaliqra',
        period: '2023',
        desc: 'Mengembangkan antarmuka web responsif dan interaktif (User Interaction). Menerapkan best practices dalam struktur HTML, styling CSS, dan logika JavaScript untuk pengalaman pengguna yang optimal.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    }
]

const Experience = () => {
    const [expanded, setExpanded] = useState(null)

    return (
        <div className="w-full max-w-4xl px-4 flex flex-col py-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Pengalaman</h2>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] md:-left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                        <div
                            className={`cursor-pointer group bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all ${expanded === index ? 'bg-white/10 border-primary/30' : ''}`}
                            onClick={() => setExpanded(expanded === index ? null : index)}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
                            </div>
                            <p className="text-primary/80 font-medium mb-4">{exp.company}</p>

                            <AnimatePresence>
                                {(expanded === index || window.innerWidth > 768) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map(t => (
                                                <span key={t} className="px-2 py-1 text-xs rounded bg-black/30 text-gray-400 border border-white/5">{t}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
