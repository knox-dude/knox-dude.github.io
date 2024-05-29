import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "@/Components/Homepage";
import About from "@/Components/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;