import { useState } from "react";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Wrapper } from "./App.style";

import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(light);
  /*#D9D9D9*/

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Layout />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
