import { useState } from "react";
import { FaBars } from "react-icons/fa"


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Andrew Knox
        </div>
        <div className="hidden sm:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleDropdown} className="text-gray-300 hover:text-white focus:outline-none">
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-gray-800">
          <a href="#" className="block py-2 text-gray-300 hover:text-white">Home</a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">About</a>
          <a href="#" className="block py-2 text-gray-300 hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;