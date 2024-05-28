import { HashRouter } from "react-router-dom"
// import NavBar from "@/Components/NavBar/NavBar"
import AppRoutes from "@/Components/AppRoutes/AppRoutes"
import SideBar from "../SideBar"

function App() {
  return (
    <div className="app">
      < HashRouter >
        < SideBar />
        < AppRoutes />
      </HashRouter >
    </div>
  )
}

export default App
