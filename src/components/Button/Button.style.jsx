import styled from "styled-components";

export const Btn = styled.button`
  background-color: #4a268d;
  color: white;

  height: 3rem;
  width: 30%;

  font-size: 25px;

  border-radius: 10px;
  border: none;
  font-weight: 400;

  opacity: 0.7;
  transition: 0.5s;

  &:hover {
    opacity: 1;
    color: white;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  background-color: #4a268d;
  color: white;

  height: 3rem;
  width: 30%;

  padding: 0.5rem;
  text-decoration: none;

  font-size: 20px;

  border-radius: 10px;
  border: none;
  font-weight: 400;

  opacity: 0.8;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`;
