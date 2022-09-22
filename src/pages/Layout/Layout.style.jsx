import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Behance } from "@styled-icons/boxicons-logos/Behance";

export const HomeWrapper = styled.section`
  min-height: 100vh;

  display: flex;
  justify-content: space-around;
  z-index: 100;

  align-items: center;

  img {
    width: 70%;
    border-radius:50%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    margin-bottom: 0;
    margin-top: 0.5rem;

    align-items: center;

    text-align: center;

    img {
      width: 70%;
    }
  }
`;

export const HomeInformation = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 1rem;

  text-align: left;

  width: 50%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    width: 70%;
  }
`;

export const HomeText = styled.ul`
  display: flex;

  flex-direction: column;
  justify-content: center;
  list-style-type: none;

  padding: 0.5rem;

  h1 {
    font-size: 35px;
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
  }

  h3 {
    font-weight: 300;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;

    padding: 0;
  }
`;

export const HomeSidenav = styled.ul`
  padding: 1rem;

  list-style-type: none;
  align-items: center;
  display: flex;
  flex-direction: column;

  justify-content: center;

  a {
    padding: 1rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Git = styled(Github)`
  transition: 0.5s;
  color: #7d7cae;

  &:hover {
    color: white;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  transition: 0.5s;
  color: #7d7cae;

  &:hover {
    color: white;
  }
`;

export const BehanceIcon = styled(Behance)`
  transition: 0.5s;
  color: #7d7cae;

  &:hover {
    color: white;
  }
`;
