import "./projectsList.css"
import Project from "../Project/project"
import {projects} from "../../datapl"
const ProjectsList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">Click on a project to learn more</p>
        </div>
        <div className="pl-list">
            {projects.map((item, idx) => (
                <Project id={idx} img={item.img} />
            ))}
        </div>
    </div>
);
  };

  export default ProjectsList;