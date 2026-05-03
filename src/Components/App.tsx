import NavBar from './NavBar'
import ProjectList from './ProjectList'
import About from './About'
import Skills from './Skills'
import BackgroundColor from './BackgroundColor'
import projectsData from 'data/projects.json'
import { Project } from '@/types'

const projects = projectsData as Project[]

function App() {
  return (
    <div className="app">
      <BackgroundColor />
      <NavBar />
      <About />
      <Skills />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App
