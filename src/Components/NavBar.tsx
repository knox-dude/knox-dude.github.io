import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa'
import useDarkMode from '@/hooks/useDarkMode'

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <span onClick={handleMode} aria-label="Toggle theme">
      {darkTheme ? (
        <FaSun size="22" className="top-navigation" />
      ) : (
        <FaMoon size="22" className="top-navigation" />
      )}
    </span>
  )
}

function NavBar() {
  return (
    <nav className="glass-nav fixed z-50 w-full top-0">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="font-display font-bold text-xl gradient-text">
          Andrew Knox
        </span>
        <div className="flex items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/knox-dude"
            aria-label="GitHub"
          >
            <FaGithub size={22} className="top-navigation" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/knox99/"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} className="top-navigation" />
          </a>
          <ThemeIcon />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
