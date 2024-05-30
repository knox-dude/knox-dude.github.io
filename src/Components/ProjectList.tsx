import ProjectCard from './ProjectCard'

interface Project {
  id: number
  images: string[]
  description: string
  link: string | null
}

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
            imagePath={project.images[0]}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectList
