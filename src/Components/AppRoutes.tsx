import { Routes, Route, Navigate } from 'react-router-dom'
import About from '@/Components/About'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
