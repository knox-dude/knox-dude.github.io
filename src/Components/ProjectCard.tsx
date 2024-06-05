import { FaLink, FaGithub, FaSlash } from 'react-icons/fa'
import { Project } from '@/types'
import TopicBubble from './TopicBubble'

function ProjectCard({ images, description, title, links, topics }: Project) {
  // create list of topic components 
  const topicList = () => {
    return topics.map((topic) => (
      <TopicBubble
        key={topic.id}
        text={topic.text}
        color={topic.color}
      />
    ))
  }

  const navLinks = () => {
    if (links.github && links.site) {
      return (
        <>
          <a
            href={links.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-full w-full items-center justify-center border-r-2 border-ui"
          >
            <FaGithub size={40} />
          </a>
          <a
            href={links.site}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-full w-full items-center justify-center"
          >
            <FaLink size={40} />
          </a>
        </>
      )
    } else if (links.github) {
      return (
        <a
          href={links.github}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center"
        >
          <FaGithub size={40} />
        </a>
      )
    } else if (links.site) {
      return (
        <a
          href={links.site}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center"
        >
          <FaLink size={40} />
        </a>
      )
    } else {
      return (
        <span className="flex h-full w-full items-center justify-center">
          <FaSlash size={40} />
        </span>
      )
    }
  }

  return (
    <article className="ui m-4 flex flex-col overflow-hidden rounded-lg shadow-lg">
      <section className="project-picture flex-shrink-0 p-2">
        <img
          src={images[0]}
          alt="Project photo"
          className="w-full rounded object-cover"
        />
      </section>
      <section className="topics grid grid-cols-2 gap-2 p-4">
        {topicList()}
      </section>
      <section className="description mx-2 flex-grow">
        <h1 className="text mb-2 text-center text-3xl">{title}</h1>
        <p className="text m-2">{description}</p>
      </section>
      <nav className="flex items-center justify-around bg-ui-light p-2">
        {navLinks()}
      </nav>
    </article>
  )
}

export default ProjectCard
