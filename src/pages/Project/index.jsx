import { 
  ProjectMain, 
  ProjectBox, 
  ProjectContent, 
  CodeIcon, 
  Back,
  DesignIcon } from "./Project.style";

function Project() {
  return (
    <>
      <ProjectMain className="Projects">
        <h1>Projects</h1>
        <ProjectContent>
        <ProjectBox>
            <div>
              <li>
                
             
              <p>Spotify Cache</p>
              <h3>
              Consuming spotify's API and cached the data in Redis.
              </h3>
              <a href="https://github.com/GiovanaBorges/cache-redis-spotify" target="_blank">See</a>
               </li>
            </div>
          </ProjectBox>
          <ProjectBox>
            <div>
              <li>
                
            
              <p>Api with Prisma</p>
              <h3>
              A simple crud made with Prisma ORM.
              </h3>
              <a href="https://github.com/GiovanaBorges/Prisma" target="_blank">See</a>
              </li>
            </div>
          </ProjectBox>
          <ProjectBox>
            <div>
              <li>
                <DesignIcon size="35" />          
              <p>Working...</p>
              <h3>
              Developing a new Projects. Working on the best for you.
              </h3>
              </li>
            </div>
          </ProjectBox>
         
        </ProjectContent>
      </ProjectMain>
    </>
  );
}

export default Project;
