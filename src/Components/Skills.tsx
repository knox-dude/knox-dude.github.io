import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaCubes, FaCloud, FaRobot } from 'react-icons/fa'
import { SkillCategory } from '@/types'
import skillsData from 'data/skills.json'

const skills = skillsData as SkillCategory[]

const categoryConfig: Record<string, { icon: React.ReactNode; gradient: string; border: string }> = {
  Languages: {
    icon: <FaCode size={28} />,
    gradient: 'from-indigo-500/10 to-indigo-500/5',
    border: 'border-indigo-400/30 dark:border-indigo-500/30',
  },
  Frameworks: {
    icon: <FaCubes size={28} />,
    gradient: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-400/30 dark:border-amber-500/30',
  },
  'Tools & Cloud': {
    icon: <FaCloud size={28} />,
    gradient: 'from-teal-500/10 to-teal-500/5',
    border: 'border-teal-400/30 dark:border-teal-500/30',
  },
  'AI / LLM': {
    icon: <FaRobot size={28} />,
    gradient: 'from-violet-500/10 to-violet-500/5',
    border: 'border-violet-400/30 dark:border-violet-500/30',
  },
}

const iconColors: Record<string, string> = {
  Languages: 'text-primary',
  Frameworks: 'text-secondary',
  'Tools & Cloud': 'text-accent',
  'AI / LLM': 'text-violet-500',
}

function SkillCard({ category, skills: skillList }: SkillCategory) {
  const config = categoryConfig[category] ?? categoryConfig['Languages']
  const iconColor = iconColors[category] ?? 'text-primary'

  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br ${config.gradient} ${config.border} p-6 flex flex-col gap-4 dark:bg-dark-light/50`}
    >
      <div className={`${iconColor} flex items-center gap-3`}>
        {config.icon}
        <h3 className="font-display font-bold text-lg text dark:text-light">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 px-6">
      <motion.h2
        className="font-display font-bold text-center text-4xl lg:text-5xl gradient-text mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SkillCard {...cat} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
