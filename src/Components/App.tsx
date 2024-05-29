import NavBar from './NavBar'
import ProjectList from './ProjectList'
import About from './About'
import BackgroundColor from './BackgroundColor'
import projects from "projects.json"

function App() {
  return (
    <div className="app">
      <BackgroundColor />
      <NavBar />
      <About />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App
