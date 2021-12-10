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
            <a href="#">
              <Github size="25" />
            </a>
            <a href="#">
              <Linkedin size="25" />
            </a>
            <a href="#">
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
