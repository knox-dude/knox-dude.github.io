import ProjectCard from './ProjectCard'
import { Project } from '@/types'

interface ProjectListProps {
  projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      <h1 className=" text text-center text-3xl ">Projects</h1>
      <div className=" m-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            images={project.images}
            description={project.description}
            title={project.title}
            links={project.links}
            topics={project.topics}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectList
