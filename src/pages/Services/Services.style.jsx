import styled from "styled-components";
import { CodeSlash } from "@styled-icons/bootstrap/CodeSlash";
import { Server } from "@styled-icons/boxicons-regular/Server";
import {DesignServices} from "@styled-icons/material/DesignServices"

export const Skill = styled.section`
  min-height: 100vh;

  display: flex;
  flex-direction:column;
  justify-content: center;
  z-index: 100;

  align-items: center;

  h1{
    font-size:4rem;
  }
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
  flex-direction: column;

  list-style-type: none;
  text-align:left;
  
  width: 20%;
  margin: 1rem 0.5rem;

  border:2px solid #303030;

  transition:0.5s;

  div {
    
    padding:1.5rem;
  
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:right;

    min-height: 35vh;
    transition: 0.5s;

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

  h3{
    font-weight:300;
  }

  &:hover{
    border:2px solid #5f5da6;
    box-shadow:none;
    -webkit-box-shadow:none;

    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      4px 1px 38px 4px #000000;
    box-shadow: 0px 10px 13px -7px #5f5da6,
      4px 1px 38px 4px #000000 ;
  }

  @media only screen and (max-width: 768px) {
    width: 70%;

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

export const DesignIcon = styled(DesignServices)`
  color: #5f5da6;
`;
