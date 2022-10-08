import { 
  ProjectMain, 
  ProjectBox, 
  ProjectContent, 
  CodeIcon, 
  Back,
  DesignIcon } from "./Project.style";

import Fade from 'react-reveal/Fade';

function Project() {
  return (
    <>
      <ProjectMain className="Projects">
        <Fade top>
          <h1>Projects</h1>
        </Fade>
        <ProjectContent>
        <ProjectBox>
            <div>
              <li>
                
              <Fade top>
                <p>Spotify Cache</p>
              </Fade>
              <Fade top>
                <h3>
                  Consuming spotify's API and cached the data in Redis.
                </h3>
              </Fade>
              <a href="https://github.com/GiovanaBorges/cache-redis-spotify" target="_blank">See</a>
               </li>
            </div>
          </ProjectBox>
          <ProjectBox>
            <div>
              <li>
                
              <Fade top>
                <p>Api with Prisma</p>
              </Fade>
              <Fade top>
                <h3>
                  A simple crud made with Prisma ORM.
                </h3>
              </Fade>
              <a href="https://github.com/GiovanaBorges/Prisma" target="_blank">See</a>
              </li>
            </div>
          </ProjectBox>
          <ProjectBox>
            <div>
              <li>
                <DesignIcon size="35" />          
              <Fade top>
                <p>Working...</p>
              </Fade>
              <Fade top>
                <h3>
                  Developing a new Projects. Working on the best for you.
                </h3>
              </Fade>
              </li>
            </div>
          </ProjectBox>
         
        </ProjectContent>
      </ProjectMain>
    </>
  );
}

export default Project;
