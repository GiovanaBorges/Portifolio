import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.bg ? props.bg : "aqua")};
  color: ${(props) => (props.color ? props.color : "white")};

  transition: 0.5s;
`;
