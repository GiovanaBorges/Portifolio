import { useState,useContext } from "react";
import Layout from "./Layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sobre from "../pages/Sobre";
import Project from "../pages/Project";
import Skills from "../pages/Skills";
import { Wrapper } from "./App.style";

import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { RoutesApp } from "../routes";

function App() {
  const [theme, setTheme] = useState(dark);
  /*#D9D9D9*/

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
          <Wrapper>
            <RoutesApp toggleTheme={toggleTheme} theme={theme} />
          </Wrapper>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
