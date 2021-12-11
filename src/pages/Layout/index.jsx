import {
  HomeWrapper,
  HomeInformation,
  HomeSidenav,
  HomeText,
  Git,
  LinkedinIcon,
  BehanceIcon,
} from "./Layout.style";

import Sobre from "../Sobre";
import Skills from "../Skills";
import Project from "../Project";
import { Button } from "../../components/Button";

function Layout() {
  return (
    <>
      <HomeWrapper>
        <HomeInformation>
          <HomeSidenav>
            <a
              href="https://github.com/GiovanaBorges"
              rel="noreferrer"
              target="_blank"
            >
              <Git size="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/giovana-franco-borges-607073184/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size="25" />
            </a>
            <a
              href="https://www.behance.net/giovana_borges"
              target="_blank"
              rel="noreferrer"
            >
              <BehanceIcon size="25" />
            </a>
          </HomeSidenav>
          <HomeText>
            <li>
              <h2>Oi , eu sou</h2>
              <h1>Giovana Borges</h1>
              <h2>Fullstack java </h2>
              <h3>Quer desenvolver algo comigo ou conversar ?</h3>
              <Button text={"Contato"} />
            </li>
          </HomeText>
        </HomeInformation>
        <div>
          <img src={"giovana_preview.png"} alt="image of Giovana Borges" />
        </div>
      </HomeWrapper>
      <Sobre />
      <Skills />
      <Project />
    </>
  );
}

export default Layout;
