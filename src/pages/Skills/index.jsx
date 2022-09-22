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

  function Skills() {
    return (
      <>
      <SkillsSection>
        <div>
            <h1>Knowledge</h1>
            <h3>*mouse cursor over card to read*</h3>
        </div>

        <div>
            <SkillContent>
                <SkillBox>
                    <React size="50"/>
                </SkillBox>
                <SkillBox>
                    <NodeIcon size="50"/>
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
  