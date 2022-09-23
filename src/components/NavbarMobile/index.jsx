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
          <Link to="/home">
            <h2>Giovana</h2>
          </Link>

          <Link to="/sobre">
            <h2>About</h2>
          </Link>
          <Link to="/skills" >
            <h2>Services</h2>
          </Link>
          <Link to="/projects">
            <h2>Projects</h2>
          </Link>
        </li>
      </NavbarMobileWrapper>
    </>
  );
}

export default NavbarMobile;
