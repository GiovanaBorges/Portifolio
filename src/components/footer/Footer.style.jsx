import styled from "styled-components";
import { BehanceIcon } from "../../pages/Layout/Layout.style";
import { Git } from "../../pages/Layout/Layout.style";
import { LinkedinIcon } from "../../pages/Layout/Layout.style";

export const FooterWrapper = styled.footer`
  background-color: #2f0f56;

  display: flex;
  justify-content: center;
  color: white;
`;

export const FooterInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    a {
      padding: 0.5rem;
      align-items: center;
      margin: 0 0.5rem;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-weight: 600;
      font-size: 15px;
    }
  }
`;

export const Behance = styled(BehanceIcon)`
  color: white;
  opacity:0.5;
  transition:0.5s;

  &:hover {
    color: white;
    opacity:1;
  }
`;

export const Github = styled(Git)`
  color: white;
  opacity:0.5;
  transition:0.5s;

  &:hover {
    color: white;
    opacity:1;
  }
`;

export const Linkedin = styled(LinkedinIcon)`
  color: white;
  opacity:0.5;
  transition:0.5s;

  &:hover {
    color: white;
    opacity:1;
  }
`;
