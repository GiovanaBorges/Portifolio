import {
    SkillsSection,
    SkillBox,
    SkillContent,
    React,
    NodeIcon,
    MongodbIcon,
    StyledIcon,
    RedisIcon,
    MysqlIcon,
    PrismaIcon,
    TypescriptIcon,
    DockerIcon
} from "./skills.style"

import {useState} from "react"

  function Skills() {
    const [title,setTitle] = useState("Knowledge")
    const [subtitle,setSubtitle] = useState("*mouse cursor over card to read*")
    
    function resetText(){
        setTitle("Knowledge")
        setSubtitle("*mouse cursor over card to read")
    }

    return (
      <>
      <SkillsSection>
        <div className="skillsText">
            <h1>
                {title}
            </h1>
            <h3>{subtitle}</h3>
        </div>

        <div>
            <SkillContent>
                <SkillBox
                onMouseEnter={() => {
                    setTitle("React"); 
                    setSubtitle("React is an open source JavaScript library focused on creating user interfaces on web pages.");}}
                onMouseLeave={() => resetText()}
                >
                    <React size="70"/>
                </SkillBox>
                <SkillBox 
                onMouseEnter={() => {
                    setTitle("Node"); 
                    setSubtitle("Node.js is an open-source, cross-platform software, based on Google's V8 interpreter, that allows the execution of JavaScript code outside of a web browser.");}}
                onMouseLeave={() => resetText()}
                >
                    <NodeIcon size="70" />
                </SkillBox>
                 <SkillBox
                  onMouseEnter={() => {
                    setTitle("MongoDB"); 
                    setSubtitle("MongoDB is a free, open-source, cross-platform document-oriented database software written in the C++ language.");}}
                onMouseLeave={() => resetText()}
                 >
                    <MongodbIcon size="70"/>
                </SkillBox>
                <SkillBox
                    onMouseEnter={() => {
                        setTitle("Styled components"); 
                        setSubtitle("styled-components is the result of imagining how we could improve CSS to style React component systems.");}}
                    onMouseLeave={() => resetText()}
                >
                    <StyledIcon size="70"/>
                </SkillBox>
                <SkillBox
                 onMouseEnter={() => {
                    setTitle("Redis"); 
                    setSubtitle("Redis is an in-memory data structure store, used as a distributed key-value in-memory database, cache, and message broker, with optional durability.");}}
                onMouseLeave={() => resetText()}
                >
                    <RedisIcon size="70"/>
                </SkillBox>
                <SkillBox  
                onMouseEnter={() => {
                        setTitle("Prisma"); 
                        setSubtitle("Prisma is a next-generation ORM that consists of these tools: Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript , Prisma Migrate: Declarative data modeling & migration system and Prisma Studio: GUI to view and edit data in your database");}}
                    onMouseLeave={() => resetText()}>
                    <PrismaIcon size="70"/>
                </SkillBox>
                <SkillBox
                onMouseEnter={() => {
                    setTitle("Docker"); 
                    setSubtitle("Docker is a set of platform-as-a-service products that use operating system-level virtualization to deliver software in packages called containers.");}}
                onMouseLeave={() => resetText()}>
                    <DockerIcon size="70"/>
                </SkillBox>
                <SkillBox
                onMouseEnter={() => {
                    setTitle("Typescript"); 
                    setSubtitle("TypeScript is an open source programming language developed by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.");}}
                onMouseLeave={() => resetText()}>
                    <TypescriptIcon size="70"/>
                </SkillBox>
            </SkillContent>
        </div>
      </SkillsSection>
      </>
    );
  }
  
  export default Skills;
  