import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

export const NavbarWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  background-color: #5f5da6;

  h2 {
    font-weight: 600;
  }

   h2.menu{
    display:none;
  }

  li {
    display: flex;
    justify-content: space-evenly;

    width: 40%;
    color: ${(props) => props.color}

    h2 {
      padding: 0.3rem;
      transition: 0.3s;

      color: ${(props) => props.color}
      font-weight: 400;

      &:hover {
        color: ${(props) => (props.theme.title == "light" ? "white" : "black")};
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    
    
    li{
      justify-content: flex-end;
    }
    
    
    h2.themeSwitcher,h2.menu {
    display:flex;
  }

  h2{
    display: none;
  }
  }

`;

export const MenuIcon = styled(Menu)`
      padding: 0.3rem;
      transition: 0.3s;

      color: ${(props) => props.color}
      font-weight: 400;

      &:hover {
        color: ${(props) => (props.theme.title == "light" ? "white" : "black")};
        cursor: pointer;
      }
`;
