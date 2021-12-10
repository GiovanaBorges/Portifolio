import { Skill, SkillsBox, SkillContent, CodeIcon, Back } from "./Skills.style";

function Skills() {
  return (
    <>
      <Skill>
        <h1>Serviços</h1>
        <SkillContent>
          <SkillsBox>
            <div>
              <li>
                <CodeIcon size="35" />
              </li>
              <p>Frontend Development</p>
              <a href="#">Ver mais</a>
            </div>
          </SkillsBox>
          <SkillsBox>
            <div>
              <li>
                <Back size="35" />
              </li>
              <p>Backend Development</p>

              <a href="#">Ver mais</a>
            </div>
          </SkillsBox>
        </SkillContent>
      </Skill>
    </>
  );
}

export default Skills;
