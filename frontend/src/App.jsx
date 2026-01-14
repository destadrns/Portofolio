import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VueWrapper } from './components/VueWrapper'

// Section imports (will create these next)
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

// Vue Components (will create these)
import AboutVue from './components/vue/About.vue'
import ProjectsVue from './components/vue/Projects.vue'

function App() {
    const [activeSection, setActiveSection] = useState(0)

    const sections = [
        { id: 'hero', component: <Hero /> },
        { id: 'about', component: <VueWrapper component={AboutVue} key="vue-about" /> },
        { id: 'skills', component: <Skills /> },
        { id: 'experience', component: <Experience /> },
        { id: 'projects', component: <VueWrapper component={ProjectsVue} key="vue-projects" /> },
        { id: 'education', component: <Education /> },
        { id: 'contact', component: <Contact /> },
    ]

    return (
        <div className="bg-background text-white h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

            {/* Navigation Dots */}
            <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
                {sections.map((_, index) => (
                    <a
                        key={index}
                        href={`#section-${index}`}
                        onClick={() => setActiveSection(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === index ? 'bg-accent shadow-[0_0_10px_#06b6d4]' : 'bg-white/20 hover:bg-white/50'}`}
                    />
                ))}
            </div>

            {/* Sections */}
            <section
                key={index}
                id={`section-${index}`}
                className={`w-full snap-start snap-always relative flex items-center justify-center overflow-hidden
                        ${index === 0 ? 'h-screen' : 'min-h-screen py-16 md:py-0'} 
                    `}
                onMouseEnter={() => setActiveSection(index)} // Simple detection, can be improved with IntersectionObserver
            >
                {section.component}
            </section>
            ))}

            {/* Persistent Background Elements can go here (Particles, etc) */}
        </div>
    )
}

export default App
