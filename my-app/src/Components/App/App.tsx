import { HashRouter } from "react-router-dom"
import NavBar from "@/Components/NavBar/NavBar"
import AppRoutes from "@/Components/AppRoutes/AppRoutes"

function App() {
  return (
    <div className="app">
      < HashRouter >
      < NavBar />
      < AppRoutes />
      </HashRouter >
    </div>
  )
}

export default App
