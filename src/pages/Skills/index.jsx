import { Skill, SkillsBox, SkillContent, CodeIcon, Back } from "./Skills.style";

function Skills() {
  return (
    <>
      <Skill className="Skills">
        <h1>Serviços</h1>
        <SkillContent>
          <SkillsBox>
            <div>
              <li>
                <CodeIcon size="35" />
              </li>
              <p>Frontend Development</p>
              <a
                href="https://kenzie.com.br/blog/front-end/"
                target="_blank"
                rel="noreferrer"
              >
                Ver mais
              </a>
            </div>
          </SkillsBox>
          <SkillsBox>
            <div>
              <li>
                <Back size="35" />
              </li>
              <p>Backend Development</p>

              <a
                href="https://kenzie.com.br/blog/back-end/"
                target="_blank"
                rel="noreferrer"
              >
                Ver mais
              </a>
            </div>
          </SkillsBox>
        </SkillContent>
      </Skill>
    </>
  );
}

export default Skills;
