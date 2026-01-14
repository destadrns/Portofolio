import React from 'react'
import { motion } from 'framer-motion'

const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'Vue.js', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'Framer Motion', level: 95, category: 'Animation' },
    { name: 'TailwindCSS', level: 100, category: 'Styling' },
    { name: 'Three.js', level: 70, category: '3D' },
]

const Skills = () => {
    return (
        <div className="w-full max-w-6xl px-4 flex flex-col items-center py-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center"
            >
                Keahlian Teknis
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-2 text-cyan-300">{skill.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{skill.category}</p>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="bg-primary h-full rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            />
                        </div>
                        <p className="text-right text-xs text-gray-400 mt-1">{skill.level}%</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
