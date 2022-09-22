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
    
    return (
      <>
      <SkillsSection>
        <div>
            <h1>
                {title}
            </h1>
            <h3>{subtitle}</h3>
        </div>

        <div>
            <SkillContent>
                <SkillBox>
                    <React size="50"/>
                </SkillBox>
                <SkillBox >
                    <NodeIcon size="50" 
                    onMouseEnter={() => {setTitle("Node"); setSubtitle("texsta");}}
                    onMouseLeave={() => {setTitle("Knowledge"); setSubtitle("*mouse cursor over card to read*");}}
                    />
                </SkillBox>
                 <SkillBox>
                    <MongodbIcon size="50"/>
                </SkillBox>
                <SkillBox>
                    <StyledIcon size="50"/>
                </SkillBox>
                <SkillBox>
                    <RedisIcon size="70"/>
                </SkillBox>
                <SkillBox>
                    <PrismaIcon size="50"/>
                </SkillBox>
                <SkillBox>
                    <DockerIcon size="70"/>
                </SkillBox>
                <SkillBox>
                    <TypescriptIcon size="50"/>
                </SkillBox>
            </SkillContent>
        </div>
      </SkillsSection>
      </>
    );
  }
  
  export default Skills;
  
  