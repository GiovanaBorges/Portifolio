import styled from "styled-components";

export const WrapperProject = styled.section`
   min-height: 100vh;

  display: flex;
  justify-content: space-around;
  z-index: 100;

  align-items: center;
`;

export const ProjectBox = styled.div`
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(3, 20%);
  grid-gap: 0.9rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;

    align-items: center;
  }
`;

export const ProjectContent = styled.div`
  width: 100%;
  height: 100%;

  img {
    max-width: 100%;
    height: 9rem;
  }

  div.text {
    text-align: left;

    display: flex;
    justify-content: space-around;
    width: 100%;

    h1 {
      font-weight: 400;
      font-size: 20px;
    }
  }

  div.techs {
    display: flex;

    border-bottom: 3px solid #5f5da6;
    border-left: 3px solid #5f5da6;
    border-right: 3px solid #5f5da6;

    justify-content: space-around;

    p {
      border-radius: 3px;
      padding: 0.5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
    height: 100%;

    img {
      max-width: 100%;
      height: 9rem;
    }
  }
`;
