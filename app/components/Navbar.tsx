'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // met à jour tout de suite au chargement
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-green-500/10 border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      {/* Fond animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -top-20 right-1/4 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl opacity-50"
        />
      </div>

      {/* Ligne lumineuse bas */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
      />

      {/* Contenu nav + menu mobile (overlay) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Barre supérieure */}
        <div className="flex items-center justify-between py-4">
          {/* LOGO AF + Portfolio */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('#accueil')}
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md shadow-green-500/20">
              <span className="text-xs font-semibold">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-sm font-semibold text-white">AF</span>
              <span className="text-[0.7rem] text-gray-400">Portfolio</span>
            </div>
          </motion.button>

          {/* Navigation desktop */}
          <div className="hidden items-center space-x-1 lg:space-x-2 md:flex">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link rounded-lg px-3 py-2 transition-all duration-300 lg:px-4 text-sm font-medium ${
                  activeSection === link.href.slice(1)
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white border border-transparent'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="/cv.pdf"
              target="_blank"
              className="ml-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-lg hover:shadow-green-500/25 lg:px-6 text-sm"
            >
              CV
            </motion.a>
          </div>

          {/* Bouton menu mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
              isOpen ? 'bg-gray-800 text-green-400' : 'bg-gray-800/50 text-white hover:bg-gray-800'
            }`}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </motion.button>
        </div>

        {/* MENU MOBILE = overlay qui passe par-dessus le contenu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="
                absolute left-0 right-0 top-full
                border-b border-gray-800
                bg-black/95 backdrop-blur-xl
                md:hidden
                max-h-[calc(100vh-64px)]  /* hauteur max ≈ écran - barre du haut */
                overflow-y-auto
              "
            >
              <div className="space-y-2 px-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? 'bg-green-500/10 text-green-400 border-l-4 border-green-500'
                        : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  href="/cv.pdf"
                  target="_blank"
                  className="mt-4 block w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-center font-medium text-white hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  Télécharger CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}