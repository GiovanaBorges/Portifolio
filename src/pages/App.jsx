import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Layout from "../pages/Layout";
import Project from "../pages/Project";
import Sobre from "../pages/Sobre";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDarkMode(saved === "dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-[#262626] dark:text-white transition-colors duration-300">

        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

        <main className="px-4 pt-24">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;