import NavBar from "../NavBar/NavBar"
import ProjectList from "../ProjectList/ProjectList"
import About from "../About/About";

interface Project {
  id: number;
  imagePath: string;
  description: string;
  link: string;
}

const projects:Project[] = [
  {
    id: 1,
    imagePath: 'photos/jeopardy-game.PNG',
    description: 'A small app built in basic HTML/CSS/JS that lets you play jeopardy',
    link: '/project1',
  },
  {
    id: 2,
    imagePath: 'photos/hacker-news-clone.PNG',
    description: 'A clone of hacker news (https://hackernews.com) built with basic HTML/CSS/JS with all functionality of hacker news.',
    link: '/project2',
  },
  {
    id: 3,
    imagePath: '/path/to/image3.jpg',
    description: 'Project 3 Description',
    link: '/project3',
  },
]

function App() {

  return (
    <div className="app">
      <NavBar />
      <About />
      <ProjectList projects={projects} />
    </div>
  )
}

export default App
