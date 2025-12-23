'use client'

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// FontAwesome configuration
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
  useEffect(() => {
    // Particle background effect
    const createParticles = () => {
      const container = document.getElementById('particles')
      if (!container) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'absolute rounded-full bg-purple-500/20 pointer-events-none'
        particle.style.width = Math.random() * 4 + 1 + 'px'
        particle.style.height = particle.style.width
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`
        particle.style.animationDelay = Math.random() * 2 + 's'
        container.appendChild(particle)
      }
    }

    createParticles()
  }, [])

  return (
    <main className="relative">
      {/* Particle Background */}
      <div id="particles" className="fixed inset-0 pointer-events-none z-0" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}