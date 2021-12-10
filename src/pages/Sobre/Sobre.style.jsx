import styled from "styled-components";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { UserOutline } from "@styled-icons/typicons/UserOutline";
import { Mail } from "@styled-icons/entypo/Mail";

export const SobreSection = styled.section`
  height: 100%;

  text-align: center;

  padding: 2rem;
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
    }
  }
  img {
    width: 50%;
  }
`;

export const ZapIcone = styled(Whatsapp)`
  color: rgb(228, 183, 173);
`;

export const People = styled(UserOutline)`
  color: rgb(228, 183, 173);
`;

export const Email = styled(Mail)`
  color: rgb(228, 183, 173);
`;
