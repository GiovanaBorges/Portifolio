import { NavbarMobileWrapper } from "./NavbarMobile.style";
import ThemeSwitcher from "../ThemeSwitcher";
import { Link } from "react-scroll";
import { Close } from "./NavbarMobile.style";

function NavbarMobile({ toggleTheme, theme, mobile }) {
  return (
    <>
      <NavbarMobileWrapper>
        <li className="Navbar">
          <h2>
            <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
          </h2>
          <h2>
            <Close size="45" onClick={() => mobile()} />
          </h2>
        </li>
        <li>
          <Link to="Home">
            <h2>Giovana</h2>
          </Link>

          <Link to="Sobre">
            <h2>About</h2>
          </Link>
          <Link to="Skills">
            <h2>Services</h2>
          </Link>
          <Link to="Project">
            <h2>Projects</h2>
          </Link>
        </li>
      </NavbarMobileWrapper>
    </>
  );
}

export default NavbarMobile;
