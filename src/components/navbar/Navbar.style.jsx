import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.ul`
  display: flex;

  height: 6rem;

  justify-content: space-around;
  
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;

  text-decoration: none;
  

  h2 {
    font-weight: 400;
    color: ${(props) => props.theme.title === "light" ? "black" : "white"};

    &:hover{
        color: ${(props) =>
          props.theme.title === "light" ? "#5f5da6" : "#5f5da6"};
        cursor: pointer;
    
    }
  }

   h2.menu{
    display:none;
  }

  div{
    display:flex;
    flex-direction: row;
    justify-content: center;
  }

  li {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    text-decoration:none;

    width: 40%;
    color: ${(props) => props.theme.title === "light" ? "black" : "white"};

    h2 {
      padding: 0.3rem;
      transition: 0.3s;

      color: ${(props) => props.theme.title === "light" ? "black" : "white"};
      font-weight: 100;
      font-size:1.5rem;

      &:hover {
        color: ${(props) =>
          props.theme.title === "light" ? "#5f5da6" : "#5f5da6"};
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
    display : none;
  }
  }

`;

export const MenuIcon = styled(Menu)`
      padding: 0.3rem;
      transition: 0.3s;

      color: ${(props) => props.color};
      font-weight: 300;

      &:hover {
        color: ${(props) =>
          props.theme.title === "light" ? "white" : "black"};
        cursor: pointer;
      }
`;

export const LinkBtn = styled(NavLink)`
.current {
      color:aqua;
  }

`
