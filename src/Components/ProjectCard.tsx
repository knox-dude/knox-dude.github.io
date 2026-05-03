import { FaLink, FaGithub } from 'react-icons/fa'
import { FaLinkSlash } from 'react-icons/fa6'
import { Project } from '@/types'
import TopicBubble from './TopicBubble'
import ImageCarousel from './ImageCarousel'

const statusConfig = {
  archived: {
    label: 'Archived',
    className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-300 dark:border-amber-700',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border border-teal-300 dark:border-teal-700',
  },
}

function ProjectCard({ images, description, title, links, topics, status, statusNote }: Project) {
  const topicList = () =>
    topics.map((topic) => (
      <TopicBubble key={topic.id} text={topic.text} color={topic.color} />
    ))

  const navLinks = () => {
    if (links.github && links.site) {
      return (
        <>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full items-center justify-center border-r border-ui dark:border-ui-dark hover:text-primary transition-colors duration-200"
          >
            <FaGithub size={32} />
          </a>
          <a
            href={links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full items-center justify-center hover:text-primary transition-colors duration-200"
          >
            <FaLink size={32} />
          </a>
        </>
      )
    } else if (links.github) {
      return (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center hover:text-primary transition-colors duration-200"
        >
          <FaGithub size={32} />
        </a>
      )
    } else if (links.site) {
      return (
        <a
          href={links.site}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center hover:text-primary transition-colors duration-200"
        >
          <FaLink size={32} />
        </a>
      )
    } else {
      return (
        <span className="flex h-full w-full items-center justify-center opacity-40">
          <FaLinkSlash size={32} />
        </span>
      )
    }
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ui dark:border-ui-dark bg-white dark:bg-dark-light shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Status badge */}
      {status && (
        <div className="absolute top-3 right-3 z-10">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusConfig[status].className}`}>
            {statusConfig[status].label}
          </span>
        </div>
      )}

      <ImageCarousel images={images} />

      <section className="mx-4 mt-3 flex-grow">
        <h1 className="text font-display font-bold text-2xl mb-2">{title}</h1>
        <p className="text text-sm leading-relaxed">{description}</p>
        {statusNote && (
          <p className="mt-2 text-xs text-dark/60 dark:text-light/50 italic">{statusNote}</p>
        )}
      </section>

      <section className="flex flex-wrap gap-2 p-4 pt-3 justify-start">
        {topicList()}
      </section>

      <nav className="flex items-center justify-around border-t border-ui dark:border-ui-dark p-2 text h-12">
        {navLinks()}
      </nav>
    </article>
  )
}

export default ProjectCard
