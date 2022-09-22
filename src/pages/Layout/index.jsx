import {
  HomeWrapper,
  HomeInformation,
  HomeSidenav,
  HomeText,
  Git,
  LinkedinIcon,
  BehanceIcon,
} from "./Layout.style";


import { Button } from "../../components/Button";

function Layout() {
  return (
    <>
    
      <HomeWrapper className="Home">
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
              <h2>Hi , i am</h2>
              <h1>Giovana Borges</h1>
              <h2>Fullstack Developer </h2>
              <h3>Do you want to develop something with me?</h3>
              <a
                href="https://api.whatsapp.com/send?phone=5511991846381&text=oi , eu vim pelo seu site"
                target="_blank"
                rel="noreferrer"
              >
                <Button text={"Contact"} />
              </a>
            </li>
          </HomeText>
        </HomeInformation>
        <div>
          <img src={"image-cover-giovana.png"} alt="image of Giovana Borges" />
        </div>
      </HomeWrapper>
  
    </>
  );
}

export default Layout;
