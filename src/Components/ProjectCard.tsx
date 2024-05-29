

interface ProjectCardProps {
  imagePath: string;
  description: string;
  link: string;
}

function ProjectCard({imagePath, description, link}: ProjectCardProps) {
  return (
    <a href={link} className="block overflow-hidden bg-gray-200 rounded-md shadow-md">
      <img src={imagePath} alt="Project" className="object-cover" />
      <div className="p-4">
        <p className="text-gray-800">{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard