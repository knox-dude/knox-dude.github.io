import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '@/types'

interface ProjectListProps {
  projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
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
        Projects
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <ProjectCard
              id={project.id}
              images={project.images}
              description={project.description}
              title={project.title}
              links={project.links}
              topics={project.topics}
              status={project.status}
              statusNote={project.statusNote}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectList
