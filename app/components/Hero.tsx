'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  { icon: faGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: faLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: faTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: faDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
]

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="blob absolute top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-green-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="blob absolute bottom-20 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-green-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Salut, je suis
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              AVIMORA Faniriana
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Développeur Full Stack passionné par la création d'expériences web modernes, 
            innovantes et performantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              Me contacter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projets')}
              className="px-8 py-4 border-2 border-green-500/50 text-white rounded-full font-medium hover:bg-green-500/10 hover:border-green-500 transition-all duration-300"
            >
              Voir mes projets
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 hover:border-green-500/50"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Main Circle */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 shadow-2xl shadow-green-500/30">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <FontAwesomeIcon 
                        icon={faCode} 
                        className="text-6xl sm:text-7xl lg:text-8xl text-green-400 mb-4" 
                      />
                    </motion.div>
                    <p className="text-gray-400 text-sm sm:text-base">Développeur Full Stack</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gray-800 rounded-2xl p-3 sm:p-4 shadow-xl border border-green-500/30"
              >
                <span className="text-2xl sm:text-3xl">⚛️</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gray-800 rounded-2xl p-3 sm:p-4 shadow-xl border border-green-500/30"
              >
                <span className="text-2xl sm:text-3xl">🚀</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#apropos')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-green-400 transition-colors"
        >
          <span className="text-sm mb-2 hidden sm:block">Défiler</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-current rounded-full"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}