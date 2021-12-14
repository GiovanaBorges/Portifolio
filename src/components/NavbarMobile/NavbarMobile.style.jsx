import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export const NavbarMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.5s;

  height: 100vh;
  justify-content: space-between;

  align-items: center;
  margin: 0;
  padding: 0;

  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(4px);

  li {
    list-style-type: none;

    padding: 10rem;
  }

  li.Navbar {
    display: flex;
    align-items: center;

    justify-content: space-around;

    width: 100%;

    padding: 1rem;
  }
`;

export const Close = styled(CloseOutline)`
  color: ${(props) => props.color};
`;
