import ProjectCard from '../ProjectCard/ProjectCard';

interface Project {
  id: number;
  imagePath: string;
  description: string;
  link: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      <h1 className=" text-center text-3xl ">Projects</h1>
      <div className=" m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} imagePath={project.imagePath} description={project.description} link={project.link} />
        ))}
      </div>  
    </>
  );
};

export default ProjectList;