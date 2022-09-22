import styled from "styled-components";
import {ReactLogo} from "@styled-icons/boxicons-logos/ReactLogo"
import {Node} from "@styled-icons/fa-brands/Node"
import {Mongodb} from "@styled-icons/simple-icons/Mongodb"
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents"
import {Redis} from "@styled-icons/simple-icons/Redis"
import {Mysql} from "@styled-icons/simple-icons/Mysql"
import {Prisma} from "@styled-icons/simple-icons/Prisma"
import {Typescript} from "@styled-icons/simple-icons/Typescript"
import {Docker} from "@styled-icons/boxicons-logos/Docker"

export const SkillsSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
  
    z-index: 100;
    align-items: center;

    h1{
        font-size:5rem;
        font-weight:200;
    }

    @media only screen and (max-width: 768px) {
        width: auto;
    }
`;

export const SkillContent = styled.div`
    margin:6rem;
    display:grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    width:70%:
`

export const SkillBox = styled.div`
  padding:0.5rem;
  transition:0.5s;
  border:2px solid  #303030;

  display:flex;
  align-items:center;
  justify-content:center;

  &:hover{
    border: 2px solid #5f5da6;
  }

`;

export const React = styled(ReactLogo)`
  color: #5f5da6;
`;

export const NodeIcon = styled(Node)`
    color: #5f5da6;
`;

export const MongodbIcon = styled(Mongodb)`
    color: #5f5da6;
`

export const StyledIcon = styled(Styledcomponents)`
    color: #5f5da6;
`

export const RedisIcon = styled(Redis)`
    color: #5f5da6;
`

export const MysqlIcon = styled(Mysql)`
    color: #5f5da6;
`

export const PrismaIcon = styled(Prisma)`
    color: #5f5da6;
`;

export const TypescriptIcon = styled(Typescript)`
    color: #5f5da6;
`

export const DockerIcon = styled(Docker)`
    color: #5f5da6;
`