import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Layout from "./pages/Layout"
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Sobre from "./pages/Sobre"

export const RoutesApp = ({theme,toggleTheme}) =>{
    return(
    <>
        <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />    
          <Routes>
          
            <Route element={<Layout/>}  path="/" exact />
            <Route element={<Sobre/>}  path="/sobre"  />
            <Route element={<Project/>}  path="/projects"/>
            <Route element={<Skills/>}  path="/skill"/>
          </Routes>
        </Router>
        </>
    )
}