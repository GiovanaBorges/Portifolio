import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Layout from "./pages/Layout"
import Project from "./pages/Project";
import Services from "./pages/Services";
import Sobre from "./pages/Sobre"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact";

export const RoutesApp = ({theme,toggleTheme}) =>{
    return(
    <>
        <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />    
          <Routes> 
            <Route element={<Layout/>}  path="/" exact />
            <Route element={<Sobre/>}  path="/sobre"  />
            <Route element={<Project/>}  path="/projects"/>
            <Route element={<Skills/>} path="/skills"/>
            <Route element={<Services/>}  path="/services"/>
            <Route element={<Contact/>}  path="/contact"/>
          </Routes>
        </Router>
        </>
    )
}