import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  transition: 0.5s;
`;
