interface ProjectCardProps {
  imagePath: string
  description: string
  link: string | null
}

function ProjectCard({ imagePath, description, link }: ProjectCardProps) {
  const hrefLink = link ? link : "/";
  return (
    <a
      href={hrefLink}
      className="block overflow-hidden rounded-md bg-gray-200 shadow-md"
    >
      <img src={imagePath} alt="Project" className="object-cover" />
      <div className="p-4">
        <p className="text-gray-800">{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
