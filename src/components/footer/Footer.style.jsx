import styled from "styled-components";
import { BehanceIcon } from "../../pages/Layout/Layout.style";
import { Git } from "../../pages/Layout/Layout.style";
import { LinkedinIcon } from "../../pages/Layout/Layout.style";

export const FooterWrapper = styled.footer`
  background-color: #5f5da6;

  display: flex;
  justify-content: center;
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
  &:hover {
    color: black;
  }
`;

export const Github = styled(Git)`
  color: white;
  &:hover {
    color: black;
  }
`;

export const Linkedin = styled(LinkedinIcon)`
  color: white;
  &:hover {
    color: black;
  }
`;
