'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faShoppingCart, 
  faTasks, 
  faChartLine, 
  faMobileAlt, 
  faComments, 
  faBlog,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, paiement sécurisé et gestion des commandes en temps réel.',
    icon: faShoppingCart,
    gradient: 'from-green-500 to-emerald-400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Task Manager Pro',
    description: 'Application de gestion de tâches avec collaboration en temps réel et notifications push.',
    icon: faTasks,
    gradient: 'from-emerald-500 to-green-600',
    tags: ['Vue.js', 'Firebase', 'Vuex', 'PWA'],
    category: 'frontend',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec visualisation de données en temps réel et exports personnalisés.',
    icon: faChartLine,
    gradient: 'from-green-400 to-emerald-500',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Chart.js'],
    category: 'fullstack',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Fitness App',
    description: 'Application mobile de suivi fitness avec plans d\'entraînement personnalisés et suivi de progression.',
    icon: faMobileAlt,
    gradient: 'from-green-600 to-emerald-400',
    tags: ['React Native', 'Redux', 'Node.js', 'HealthKit'],
    category: 'mobile',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Application de messagerie en temps réel avec appels vidéo intégrés et partage de fichiers.',
    icon: faComments,
    gradient: 'from-emerald-400 to-green-500',
    tags: ['Socket.io', 'WebRTC', 'Express', 'Redis'],
    category: 'fullstack',
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Plateforme de blogging avec éditeur Markdown, système de commentaires et SEO optimisé.',
    icon: faBlog,
    gradient: 'from-green-500 to-emerald-600',
    tags: ['Django', 'Python', 'PostgreSQL', 'Markdown'],
    category: 'backend',
    github: '#',
    demo: '#',
  },
]

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projets" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
            <span className="text-green-400 font-medium">Portfolio</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Mes projets <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">récents</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-green-500/30 rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                  {/* Project Image/Icon */}
                  <div className={`h-48 sm:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FontAwesomeIcon 
                        icon={project.icon} 
                        className="text-6xl sm:text-7xl text-white/30" 
                      />
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-green-400 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-green-400 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xl" />
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1 text-sm sm:text-base">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs sm:text-sm font-medium text-green-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-green-500/50 text-white rounded-full font-medium hover:bg-green-500/10 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            Voir plus sur GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}