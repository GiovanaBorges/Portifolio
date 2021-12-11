import React, { useContext } from "react";
import { NavbarWrapper } from "./Navbar.style";
import ThemeSwitcher from "../ThemeSwitcher";
import { ThemeContext } from "styled-components";

function Navbar({ toggleTheme, theme }) {
  return (
    <>
      <NavbarWrapper>
        <h2>Giovana</h2>
        <li>
          <h2>About</h2>
          <h2>Portfolio</h2>
          <h2>Skills</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
          <h2>
            <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
          </h2>
        </li>
      </NavbarWrapper>
    </>
  );
}

export default Navbar;
