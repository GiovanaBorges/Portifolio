import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";
import Layout from "../pages/Layout";
import Project from "../pages/Project";
import Skills from "../pages/Skills";


function App() {
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-[#262626] dark:text-white transition-colors duration-300">

        <Navbar/>

        <main className="px-4 pt-24">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;