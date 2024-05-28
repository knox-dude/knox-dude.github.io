import { HashRouter } from "react-router-dom"
// import NavBar from "@/Components/NavBar/NavBar"
import AppRoutes from "@/Components/AppRoutes/AppRoutes"
import NavBar from "../NavBar/NavBar"

function App() {
  return (
    <div className="app">
      < HashRouter >
        <NavBar />
        < AppRoutes />
      </HashRouter >
    </div>
  )
}

export default App
