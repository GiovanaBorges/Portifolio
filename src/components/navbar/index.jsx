import React, {useState } from "react";
import { NavbarWrapper, MenuIcon } from "./Navbar.style";
import NavbarMobile from "../NavbarMobile";
import ThemeSwitcher from "../ThemeSwitcher";
import { Link } from "react-scroll";

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
            <Link to="Home">
              <h2>Giovana</h2>
            </Link>
            <h2 className="menu">
              <MenuIcon
                size="25"
                onClick={() => {
                  ChangeNavbarMobile();
                }}
              />
            </h2>
            <li>
              <Link to="Sobre">
                <h2>About</h2>
              </Link>
              <Link to="Skills">
                <h2>Services</h2>
              </Link>
              <Link to="Project">
                <h2>Projects</h2>
              </Link>
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
