import {
  SobreInformations,
  ZapIcone,
  People,
  Email,
  SobreSection,
} from "./Sobre.style";

import { Link } from "../../components/Button/Button.style";

function Sobre() {
  return (
    <>
      <SobreSection className="Sobre">
        <h1>About Giovana</h1>
        <SobreInformations>
          <div>
            <h3>
            Hello, Welcome to my profile, I'm a fullstack java developer and designer in my spare time, if you want to develop something or just want to exchange an idea, I'm available!
            </h3>

            <li>
              <h1>
                <People size="25" /> Giovana Borges
              </h1>
            </li>
            <li>
              <h1>
                <ZapIcone size="25" /> (11) 99184-6381
              </h1>
            </li>
            <li>
              <h1>
                <Email size="25" /> gigi12345as17@gmail.com
              </h1>
            </li>
            <li>
              <Link href="/curriculum-fullstackJava.pdf" download>
                Download CV
              </Link>
            </li>
          </div>
          <img
            src="https://d6f6d0kpz0gyr.cloudfront.net/uploads/images-archive/Blog/Gifs/coding.gif"
            alt="coding"
          />
        </SobreInformations>
      </SobreSection>
    </>
  );
}

export default Sobre;
