import {
  SobreInformations,
  ZapIcone,
  People,
  Email,
  SobreSection,
} from "./Sobre.style";

import Fade from 'react-reveal/Fade';

import { Link } from "../../components/Button/Button.style";

function Sobre() {
  return (
    <>
      <SobreSection className="Sobre">
        <SobreInformations>
        <Fade top>
          <div>
            <h1>Who i am?</h1>
              <h3>
              Hello, Welcome to my profile, I'm a fullstack Developer and addicted to <span>Blade runner.</span>
              </h3>
              <h3>if you want to develop something or just want to exchange an idea, I'm available!</h3>

            <ul>
              <li>
                <h1>
                  <People size="25" /> Giovana Borges
                </h1>
                </li>
                <li>
                <h1>
                  <Email size="25" /> giovanaborges.contato@gmail.com
                </h1>
                </li>
                <li>
                <Link href="/curriculum-fullstackJava.pdf" download>
                  Download CV
                </Link>
                </li>
              </ul>
              </div>
            </Fade>
        
            <Fade bottom>
            <img id="image"
              src={"blade-runner-cover.jpg"} alt="coding" 
            />
          </Fade>
          
        </SobreInformations>
      </SobreSection>
    </>
  );
}

export default Sobre;
