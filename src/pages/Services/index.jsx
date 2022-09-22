import { 
  Skill, 
  SkillsBox, 
  SkillContent, 
  CodeIcon, 
  Back,
  DesignIcon } from "./Services.style";

function Services() {
  return (
    <>
      <Skill className="Skills">
        <h1>Services</h1>
        <SkillContent>
        <SkillsBox>
            <div>
              <li>
                <Back size="35" />
             
              <p>Development Backend</p>
              <h3>
              I Develop the Back of web applications 
              with the Node , mongoDB and others technologies.
              </h3>
               </li>
            </div>
          </SkillsBox>
          <SkillsBox>
            <div>
              <li>
                <CodeIcon size="35" />
            
              <p>Development Frontend</p>
              <h3>
              I Develop the Front of web applications with React and NextJS.
              </h3>
              </li>
            </div>
          </SkillsBox>
          <SkillsBox>
            <div>
              <li>
                <DesignIcon size="35" />          
              <p>Ui design</p>
              <h3>
              I create screens and prototypes using tools like Figma.
              </h3>
              </li>
            </div>
          </SkillsBox>
         
        </SkillContent>
      </Skill>
    </>
  );
}

export default Services;
