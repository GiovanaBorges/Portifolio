import {
  FooterWrapper,
  FooterInformations,
  Behance,
  Linkedin,
  Github,
} from "./Footer.style";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterInformations>
          <h1>Giovana</h1>
          <div>
            <a
              href="https://github.com/GiovanaBorges"
              rel="noreferrer"
              target="_blank"
            >
              <Github size="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/giovana-franco-borges-607073184/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size="25" />
            </a>
            <a
              href="https://www.behance.net/giovana_borges"
              target="_blank"
              rel="noreferrer"
            >
              <Behance size="25" />
            </a>
          </div>
          <h2>&#169; Todos os direitos reservados, Giovana Borges</h2>
        </FooterInformations>
      </FooterWrapper>
    </>
  );
}

export default Footer;
