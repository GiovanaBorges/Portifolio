import { 
  Skill, 
  SkillsBox, 
  SkillContent, 
  CodeIcon, 
  Back,
  DesignIcon } from "./Services.style";

import Fade from 'react-reveal/Fade';

function Services() {
  return (
    <>
      <Skill className="Skills">
        <Fade top>
          <h1>Services</h1>
        </Fade>
        <SkillContent>
        <SkillsBox>
            <div>
              <li>
                
                <Back size="35" />
                <Fade top>
                  <p>Development Backend</p>
                </Fade>
              <Fade top>
                <h3>
                I Develop the Back of web applications 
                with the Node , mongoDB and others technologies.
                </h3>
              </Fade>
               </li>
            </div>
          </SkillsBox>
          <SkillsBox>
            <div>
              <li>
                <CodeIcon size="35" />
              <Fade top>
                <p>Development Frontend</p>
              </Fade>
              <Fade top>
                <h3>
                I Develop the Front of web applications with React and NextJS.
                </h3>
              </Fade>
              </li>
            </div>
          </SkillsBox>
          <SkillsBox>
            <div>
              <li>
                <DesignIcon size="35" />          
              <Fade top>
                <p>Ui design</p>
              </Fade>
              <Fade top>
                <h3>
                  I create screens and prototypes using tools like Figma.
                </h3>
              </Fade>
              </li>
            </div>
          </SkillsBox>
         
        </SkillContent>
      </Skill>
    </>
  );
}

export default Services;
