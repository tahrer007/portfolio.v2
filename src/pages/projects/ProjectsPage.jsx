import React from "react";
import "./projects.css";
import ProjectDetails from "../../components/project/projectDetails/ProjectDetails";
import ProjectScreenShots from "../../components/project/projectScreenshots/ProjectScreenShots";
import { technologiesIcons, projectsData } from "../../data/projectsData";

 /*<div className="projectContainer" >
            <div className="projectDetailsBox">text</div>
            <div className="projectScreenShoots">iamges</div>
    </div>*/

const ProjectsPage = () => {
 
  return (
    <div className="pages projectsPage">
      {projectsData.map((project) => {
        return (
          <div
            className="projectContainer"
            key={project.id}
           ///// style={{ flexDirection: project.id % 2 ? "row-reverse" : "row" }}
          >
             <ProjectScreenShots project={project} />
            <ProjectDetails project={project} />
          
         
           
          </div>
        );
      })}

   
    </div>
      
  );
};

export default ProjectsPage;
