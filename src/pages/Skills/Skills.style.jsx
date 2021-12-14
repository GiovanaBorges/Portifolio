import styled from "styled-components";
import { CodeSlash } from "@styled-icons/bootstrap/CodeSlash";
import { Server } from "@styled-icons/boxicons-regular/Server";

export const Skill = styled.section`
  padding: 2rem;

  margin: 0.5rem 2rem;

  text-align: center;

  align-items: center;

  height: auto;
`;

export const SkillContent = styled.div`
  align-items: center;
  text-align: center;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    margin-top: 0;

    align-items: center;

    text-align: center;
  }
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  list-style-type: none;

  width: 15%;
  height: 15%;

  margin: 1rem 0.5rem;

  word-wrap: break-word;

  div {
    padding: 0.5rem;
    height: 100%;
    transition: 0.5s;
    border-bottom: 4px #5f5da6 solid;

    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      4px 1px 38px 4px rgba(217, 217, 217, 0);
    box-shadow: 0px 10px 13px -7px #000000,
      4px 1px 38px 4px rgba(217, 217, 217, 0);

    a {
      text-decoration: none;
      font-size: 25px;
      color: #5f5da6;
    }
  }
  div > div {
    margin: 0.5rem auto;
    transition: 0.5s;
  }

  p {
    font-size: 25px;
    font-weight: 400;
  }

  @media only screen and (max-width: 768px) {
    width: 70%;

    margin-top: 0;

    align-items: center;

    text-align: center;
  }
`;

export const CodeIcon = styled(CodeSlash)`
  color: #5f5da6;
`;

export const Back = styled(Server)`
  color: #5f5da6;
`;
