import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-white">Andrew Knox</div>
        <div className="hidden flex-grow items-center justify-end sm:flex">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="ml-4 text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="ml-4 text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-800 sm:hidden">
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default NavBar
