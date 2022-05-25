import React from "react";
import "./projects.css";
import { technologiesIcons, projectsData } from "../../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="pages projectsPage">
      {projectsData.map((project) => {
        return (
          <div className="projectContainer" key={project.id}style={{ flexDirection: (project.id) ? 'row-reverse' : 'row' }}>
            <div className="projectDetailsBox">text</div>
            <div className="projectScreenShoots">iamges</div>
          </div>
        );

      })}
     
     {/*<div className="projectContainer" >
            <div className="projectDetailsBox">text</div>
            <div className="projectScreenShoots">iamges</div>
    </div>*/}
    </div>
  );
};

export default ProjectsPage;
