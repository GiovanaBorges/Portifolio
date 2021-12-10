import styled from "styled-components";

export const Btn = styled.button`
  background-color: rgb(228, 183, 173);
  color: white;

  height: 3rem;
  width: 30%;

  font-size: 25px;

  border-radius: 10px;
  border: none;
  font-weight: 400;

  opacity: 0.5;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a`
  background-color: rgb(228, 183, 173);
  color: white;

  height: 3rem;
  width: 30%;

  padding: 0.5rem;
  text-decoration: none;

  font-size: 25px;

  border-radius: 10px;
  border: none;
  font-weight: 400;

  opacity: 0.5;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;
