import { FaSun, FaMoon, FaLinkedin, FaGithub} from 'react-icons/fa'
import useDarkMode from '@/hooks/useDarkMode'

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation" />
      ) : (
        <FaMoon size="24" className="top-navigation" />
      )}
    </span>
  )
}

function NavBar() {
  return (
    <nav className="ui p-4 ">
      <div className="flex items-center justify-between">
        <div className="text text-xl font-bold">
          <p>Andrew Knox</p>
        </div>
        <div className="flex-grow items-center justify-end flex">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/knox-dude">
            <FaGithub size={24} className='top-navigation' />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/knox99/">
            <FaLinkedin size={24} className='top-navigation' />
          </a>
          <ThemeIcon />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
