import styled from "styled-components";

export const NavbarWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  align-items: center;
  margin: 0;
  padding: 0;

  h2 {
    font-weight: 600;
  }

  li {
    display: flex;
    justify-content: space-evenly;

    width: 40%;

    h2 {
      padding: 0.3rem;
      transition: 0.3s;

      font-weight: 400;

      &:hover {
        color: red;
      }
    }
  }
`;