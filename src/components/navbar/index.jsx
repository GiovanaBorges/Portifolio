import React, { useState } from "react";
import { NavbarWrapper, MenuIcon,LinkBtn } from "./Navbar.style";
import NavbarMobile from "../NavbarMobile";
import ThemeSwitcher from "../ThemeSwitcher";
import Fade from 'react-reveal/Fade';

function Navbar({ toggleTheme, theme }) {
  const [NavbarIsMobile, setNavbarIsMobile] = useState(false);

  function ChangeNavbarMobile() {
    setNavbarIsMobile(NavbarIsMobile ? false : true);
  }

  return (
    <>
      {NavbarIsMobile ? (
        <>
          <NavbarMobile
            toggleTheme={toggleTheme}
            theme={theme}
            mobile={ChangeNavbarMobile}
          />
        </>
      ) : (
        <>
        
          <NavbarWrapper mobile={ChangeNavbarMobile}>
          <Fade top>
              <LinkBtn to="/" activeClassName="current" exact style={{ textDecoration: 'none' }}>
                <h2>Giovana</h2>
              </LinkBtn>
            </Fade>
            <h2 className="menu">
              <MenuIcon
                size="25"
                onClick={() => {
                  ChangeNavbarMobile();
                }}
              />
            </h2>
            <li>
            <Fade top>
                <LinkBtn to="/sobre" exact activeClassName="current" style={{ textDecoration: 'none' }}>
                  <h2>About</h2>
                </LinkBtn>
              </Fade>
              <Fade top>
                <LinkBtn to="/services" exact activeClassName="current" style={{ textDecoration: 'none' }}>
                  <h2>Services</h2>
                </LinkBtn>
              </Fade>
              <Fade top>
                <LinkBtn to="/skills" exact activeClassName="current"  style={{ textDecoration: 'none' }}>
                  <h2>Skills</h2>
                </LinkBtn>
              </Fade>
              <Fade top>
                <LinkBtn to="/projects" exact activeClassName="current" style={{ textDecoration: 'none' }}>
                  <h2>Projects</h2>
                </LinkBtn>
              </Fade>
              <Fade top>
                <LinkBtn to="/contact" exact activeClassName="current" style={{ textDecoration: 'none' }}>
                  <h2>Contact</h2>
                </LinkBtn>
              </Fade>
              <h2 className="themeSwitcher">
                <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
              </h2>
            </li>
          </NavbarWrapper>
         
        </>
      )}
    </>
  );
}

export default Navbar;
