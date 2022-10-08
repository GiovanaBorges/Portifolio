import styled from "styled-components";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { UserOutline } from "@styled-icons/typicons/UserOutline";
import { Mail } from "@styled-icons/entypo/Mail";

export const SobreSection = styled.section`
   min-height: 100vh;

  display: flex;
  justify-content: space-around;
  z-index: 100;

  align-items: center;

  @media only screen and (max-width: 768px) {
    width: auto;
  }
`;

export const SobreInformations = styled.div`
  align-items: center;

  margin: 2rem auto;
  padding: 2rem;
  /*width: 70%;*/

  display: flex;
  justify-content: space-around;

  width: 70%;
  font-weight:200;

  img {
    width: 50%;
    height:70vh;
    border-radius: 5%;
    opacity: 0.6;
    transition:0.5s;

    &:hover{
      opacity: 1;
    }
    
  }  

  div {
    text-align: left;
    

    h3 {
      font-weight: 200;
      font-size:1.5rem;

      span{
        font-weight:300;
        color: #ef85b5;
        font-size:1.8rem;
      }
    }
    h1 {
      font-weight: 400;
      font-size: 20px;
    }

    ul {
      text-decoration:none;
      font-style: none;
      padding:0;    
      
      li{
        list-style-type: none;
        margin:2rem 0;
        
        h2{
          font-weight:200;
        }
      }
    }
  }
 
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;

    div {
      width: auto;

      li {
        margin-bottom: 1rem;
        text-decoration:none;
        font-style: none;
      }
      h3 {
        font-weight: 500;
      }
      h1 {
        font-weight: 400;
        font-size: 20px;
      }
    }
    #image {
      width: 100%;
      border-radius: 10%;
    }
  }
`;

export const ZapIcone = styled(Whatsapp)`
  color: #4a268d;
`;

export const People = styled(UserOutline)`
color: #4a268d;
`;

export const Email = styled(Mail)`
color: #4a268d;
`;
