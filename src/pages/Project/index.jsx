import { WrapperProject, ProjectBox, ProjectContent } from "./Project.style";
import { Git } from "../../pages/Layout/Layout.style";

function Project() {
  return (
    <>
      <WrapperProject>
        <div className="Project">
          <h1>Projects</h1>
        </div>
        <ProjectBox>
          <ProjectContent>
            <div>
              <img alt="projeto" src="https://j.gifs.com/79nNDy.gif" />
              <div className="text">
                <h1>
                  Calculator
                  <a
                    href="https://github.com/GiovanaBorges/Learning-reactJS/tree/main/calc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>ReactJS</p>
                <p>CSS</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img alt="projeto" src="https://j.gifs.com/NO0WqD.gif" />
              <div className="text">
                <h1>
                  DragAndDrop game
                  <a
                    href="https://github.com/GiovanaBorges/Js-Lessons/tree/main/dragndrop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>HTML</p>
                <p>JS</p>
                <p>CSS</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img
                alt="projeto"
                src="https://github.com/GiovanaBorges/Js-Lessons/blob/main/starbucks/assets/gif.gif?raw=true"
              />
              <div className="text">
                <h1>
                  Ui trend 2021
                  <a
                    href="https://github.com/GiovanaBorges/Js-Lessons/tree/main/starbucks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>HTML</p>
                <p>CSS</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img alt="projeto" src="https://j.gifs.com/pZXWy2.gif" />
              <div className="text">
                <h1>
                  Reminder
                  <a
                    href="https://github.com/GiovanaBorges/Learning-reactJS/tree/main/reminder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>ReactJS</p>
                <p>Styled-components</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img alt="projeto" src="https://j.gifs.com/Br1Q3Y.gif" />
              <div className="text">
                <h1>
                  TodoList
                  <a
                    href="https://github.com/GiovanaBorges/Learning-reactJS/tree/main/todolist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>ReactJS</p>
                <p>Styled-components</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img
                alt="projeto"
                src="https://github.com/GiovanaBorges/Learning_nodeJS/blob/main/RAM%20usage/cli.PNG?raw=true"
              />
              <div className="text">
                <h1>
                  Ram Usage
                  <a
                    href="https://github.com/GiovanaBorges/Learning_nodeJS/tree/main/RAM%20usage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>Node</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img
                alt="projeto"
                src="https://github.com/GiovanaBorges/BlogPessoal-Generation/raw/main/preview.png"
              />
              <div className="text">
                <h1>
                  Blog pessoal APIrest
                  <a
                    href="https://github.com/GiovanaBorges/BlogPessoal-Generation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>SpringBoot</p>
                <p>Java</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent>
            <div>
              <img
                alt="projeto"
                src="https://github.com/GiovanaBorges/farmacia/raw/developer/preview.png"
              />
              <div className="text">
                <h1>
                  Database farmacia APIrest
                  <a
                    href="https://github.com/GiovanaBorges/farmacia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>SpringBoot</p>
                <p>Java</p>
              </div>
            </div>
          </ProjectContent>
          <ProjectContent className="peido">
            <div>
              <img
                alt="projeto"
                src="https://github.com/GiovanaBorges/Projeto-integrador/raw/developer/assets/db.png"
              />
              <div className="text">
                <h1>
                  Projeto Integrador(ensinamus)
                  <a
                    href="https://github.com/GiovanaBorges/Projeto-integrador"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Git size="25" />
                  </a>
                </h1>
              </div>
              <div className="techs">
                <p>SpringBoot</p>
                <p>Java</p>
              </div>
            </div>
          </ProjectContent>
        </ProjectBox>
      </WrapperProject>
    </>
  );
}

export default Project;
