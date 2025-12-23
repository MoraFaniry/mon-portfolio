'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, Code, Rocket, Users } from 'lucide-react'
import { useState } from 'react'

const values = [
  {
    icon: Brain,
    title: 'Apprentissage',
    description: 'Veille et montée en compétences continues.'
  },
  {
    icon: Code,
    title: 'Qualité',
    description: 'Code structuré, propre et maintenable.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Communication et travail d\'équipe.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Applications rapides et fiables.'
  },
]

export default function About() {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      id="apropos"
      className="relative bg-black text-white py-32 px-4 overflow-hidden"
    >
      {/* Subtle background light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4">
            À propos
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Profil, compétences et vision professionnelle.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileHover={{ scale: 1.03 }}
              className="
                relative
                w-[320px] h-[480px]
                sm:w-[360px] sm:h-[520px]
                lg:w-[400px] lg:h-[560px]
                rounded-2xl
                overflow-hidden
                border border-green-500/30
                shadow-[0_30px_60px_rgba(0,0,0,0.45)]
                bg-gray-900
              "
            >
              {/* Soft light */}
              <motion.div
                animate={{ opacity: hovered ? 0.35 : 0.15 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-tr from-green-400/30 to-transparent pointer-events-none z-10"
              />

              {/* Image avec effet grayscale */}
              <motion.div
                animate={{ 
                  scale: hovered ? 1.08 : 1,
                  filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)'
                }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/pdp.jpeg"
                  alt="Photo de profil"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
              
              {/* Green accent border on hover */}
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-2 border-green-400/50 rounded-2xl pointer-events-none z-20"
              />
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Je suis <span className="text-white font-medium">Faniriana Avimora</span>, développeur{' '}
              <span className="text-green-400 font-semibold">Full Stack</span> spécialisé dans la conception
              d&apos;applications web modernes et performantes.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              J&apos;interviens aussi bien sur le frontend (React, Next.js) que sur le backend
              (Node.js, bases de données SQL).
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Mon objectif est de produire des solutions fiables, élégantes et orientées utilisateur.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {values.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: 'rgba(34, 197, 94, 0.5)'
                    }}
                    className="rounded-xl border border-gray-700/60 bg-gray-900/60 p-5 transition-all duration-300 hover:bg-gray-800/60"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}