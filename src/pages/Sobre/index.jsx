import {
  SobreInformations,
  ZapIcone,
  People,
  Email,
  SobreSection,
} from "./Sobre.style";

import { Button } from "../../components/Button";
import { Link } from "../../components/Button/Button.style";

function Sobre() {
  return (
    <>
      <SobreSection>
        <h1>Sobre Giovana</h1>
        <SobreInformations>
          <div>
            <h3>
              Olá Seja Bem Vindo ao meu perfil, sou uma desenvolvedora java
              fullstack e designer nas horas vagas , se quiser desenvolver algo
              ou se quiser somente trocar uma ideia estou disponível !
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
            src="https://miro.medium.com/max/1838/1*9S3JhMtLGiacpNpziWGN1A.gif"
            alt="coding"
          />
        </SobreInformations>
      </SobreSection>
    </>
  );
}

export default Sobre;
