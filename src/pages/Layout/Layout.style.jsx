import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Behance } from "@styled-icons/boxicons-logos/Behance";

export const HomeWrapper = styled.section`
  height: auto;

  display: flex;
  justify-content: space-around;
  z-index: 100;

  align-items: center;

  padding: 5rem 0;

  margin-top: 5rem;
  margin-bottom: 3rem;
`;

export const HomeInformation = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 1rem;

  text-align: left;

  width: 50%;
`;

export const HomeText = styled.ul`
  display: flex;

  flex-direction: column;
  justify-content: center;
  list-style-type: none;

  padding: 0.5rem;

  h1 {
    font-size: 35px;
    font-weight: 600;
  }

  h2 {
    font-weight: 400;
  }

  h3 {
    font-weight: 500;
  }
`;

export const HomeSidenav = styled.ul`
  padding: 1rem;

  list-style-type: none;
  align-items: center;
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin: 0 0.5rem;

  a {
    padding: 1rem;
  }
`;

export const Git = styled(Github)`
  transition: 0.5s;
  color: #5f5da6;

  &:hover {
    color: black;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  transition: 0.5s;
  color: #5f5da6;

  &:hover {
    color: black;
  }
`;

export const BehanceIcon = styled(Behance)`
  transition: 0.5s;
  color: #5f5da6;

  &:hover {
    color: black;
  }
`;
