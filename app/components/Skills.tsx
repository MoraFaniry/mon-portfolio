'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faServer, faTools } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { 
  faReact, 
  faVuejs, 
  faNodeJs, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faGitAlt,
  faDocker,
  faFigma
} from '@fortawesome/free-brands-svg-icons'

// Composant SVG personnalisé pour Next.js
const NextJsIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 180 180" 
    fill="currentColor"
    className={className}
  >
    <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black"/>
    </mask>
    <g mask="url(#mask0_408_134)">
      <circle cx="90" cy="90" r="90" fill="black"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/>
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
)

// Composant SVG personnalisé pour Python (bicolore jaune/bleu)
const PythonIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 128 128" 
    className={className}
  >
    <linearGradient id="python-original-a" x1="70.252%" x2="17.962%" y1="12.316%" y2="81.193%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#387EB8"/>
      <stop offset="100%" stopColor="#366994"/>
    </linearGradient>
    <linearGradient id="python-original-b" x1="30.046%" x2="81.808%" y1="20.073%" y2="88.449%" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#FFE052"/>
      <stop offset="100%" stopColor="#FFC331"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
  </svg>
)

// Type pour les icônes tech
type TechIcon = {
  icon: IconDefinition | null
  color: string
  hoverBg: string
  name: string
  isCustom: boolean
  CustomIcon?: React.FC<{ className?: string }>
}

const skillCategories = [
  {
    title: 'Frontend',
    icon: faPalette,
    color: 'from-green-500 to-emerald-400',
    shadowColor: 'shadow-green-500/25',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Vue.js / Nuxt.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: faServer,
    color: 'from-emerald-500 to-green-600',
    shadowColor: 'shadow-emerald-500/25',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'GraphQL / REST', level: 88 },
    ],
  },
  {
    title: 'Outils',
    icon: faTools,
    color: 'from-green-400 to-emerald-500',
    shadowColor: 'shadow-green-400/25',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker / K8s', level: 75 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Figma / Design', level: 85 },
    ],
  },
]

// Couleurs officielles de chaque technologie
const techIcons: TechIcon[] = [
  { icon: faReact, color: 'text-[#61DAFB]', hoverBg: 'hover:bg-[#61DAFB]/10', name: 'React', isCustom: false },
  { icon: null, color: '', hoverBg: 'hover:bg-white/10', name: 'Next.js', isCustom: true, CustomIcon: NextJsIcon },
  { icon: faVuejs, color: 'text-[#4FC08D]', hoverBg: 'hover:bg-[#4FC08D]/10', name: 'Vue.js', isCustom: false },
  { icon: faNodeJs, color: 'text-[#339933]', hoverBg: 'hover:bg-[#339933]/10', name: 'Node.js', isCustom: false },
  { icon: null, color: '', hoverBg: 'hover:bg-[#FFD43B]/10', name: 'Python', isCustom: true, CustomIcon: PythonIcon },
  { icon: faJs, color: 'text-[#F7DF1E]', hoverBg: 'hover:bg-[#F7DF1E]/10', name: 'JavaScript', isCustom: false },
  { icon: faHtml5, color: 'text-[#E34F26]', hoverBg: 'hover:bg-[#E34F26]/10', name: 'HTML5', isCustom: false },
  { icon: faCss3Alt, color: 'text-[#1572B6]', hoverBg: 'hover:bg-[#1572B6]/10', name: 'CSS3', isCustom: false },
  { icon: faGitAlt, color: 'text-[#F05032]', hoverBg: 'hover:bg-[#F05032]/10', name: 'Git', isCustom: false },
  { icon: faDocker, color: 'text-[#2496ED]', hoverBg: 'hover:bg-[#2496ED]/10', name: 'Docker', isCustom: false },
  { icon: faFigma, color: 'text-[#F24E1E]', hoverBg: 'hover:bg-[#F24E1E]/10', name: 'Figma', isCustom: false },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="competences" className="py-20 sm:py-32 relative bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
            <span className="text-green-400 font-medium">Compétences</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Mes <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <FontAwesomeIcon icon={category.icon} className="text-2xl text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-green-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center text-gray-400 mb-8">
            Technologies que j&apos;utilise au quotidien
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="group relative"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gray-900/80 backdrop-blur-sm rounded-xl flex items-center justify-center ${tech.hoverBg} transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-gray-600 hover:shadow-lg`}>
                  {tech.isCustom && tech.CustomIcon ? (
                    <tech.CustomIcon className={`w-7 h-7 sm:w-8 sm:h-8 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                  ) : tech.icon ? (
                    <FontAwesomeIcon 
                      icon={tech.icon} 
                      className={`text-2xl sm:text-3xl ${tech.color} transition-transform duration-300 group-hover:scale-110`} 
                    />
                  ) : null}
                </div>
                {/* Tooltip */}
                <span className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-xs text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-gray-700">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}