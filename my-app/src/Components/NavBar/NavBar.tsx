import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar top-0 fixed bg-gray-300 h-screen flex-col flex">
      <NavLink className={'m-2'} to="/home">Home</NavLink>
      <NavLink className={'m-2'} to="/about">About</NavLink>
      <NavLink className={'m-2'} to="/projects">Projects</NavLink>
    </div>
  )
}

export default NavBar;