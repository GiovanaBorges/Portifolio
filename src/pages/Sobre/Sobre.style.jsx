import styled from "styled-components";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { UserOutline } from "@styled-icons/typicons/UserOutline";
import { Mail } from "@styled-icons/entypo/Mail";

export const SobreSection = styled.section`
  height: 100%;

  text-align: center;

  margin-top: 3rem;

  @media only screen and (max-width: 768px) {
    width: auto;
  }
`;

export const SobreInformations = styled.div`
  align-items: center;

  margin: 2rem auto;
  padding: 2rem;
  /*width: 70%;*/

  display: flex;
  justify-content: space-around;

  width: 70%;
  list-style-type: none;

  div {
    width: 60%;

    text-align: left;
    padding: 0 0.5rem;

    h3 {
      font-weight: 500;
    }
    h1 {
      font-weight: 400;
      font-size: 20px;
    }
  }
  img {
    width: 50%;
    border-radius: 10%;
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;

    div {
      width: auto;

      li {
        margin-bottom: 1rem;
      }
      h3 {
        font-weight: 500;
      }
      h1 {
        font-weight: 400;
        font-size: 20px;
      }
    }
    img {
      width: 100%;
      border-radius: 10%;
    }
  }
`;

export const ZapIcone = styled(Whatsapp)`
  color: #5f5da6;
`;

export const People = styled(UserOutline)`
  color: #5f5da6;
`;

export const Email = styled(Mail)`
  color: #5f5da6;
`;
