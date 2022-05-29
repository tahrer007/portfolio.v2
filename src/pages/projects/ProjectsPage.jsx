import React from "react";
import "./projects.scss";
import ProjectDetails from "../../components/project/projectDetails/ProjectDetails";
import ProjectScreenShots from "../../components/project/projectScreenshots/ProjectScreenShots";
import { technologiesIcons, projectsData } from "../../data/projectsData";

/*<div className="projectContainer" >
            <div className="projectDetailsBox">text</div>
            <div className="projectScreenShoots">iamges</div>
    </div>*/

const ProjectsPage = () => {
  return (
    <section id="projects" className=" sections projectsPage">
      {projectsData.map((project) => {
        return (
          <div
            key={project.id}
            className="projectContainer"
            style={{ flexDirection: project.id % 2 ? "row" : "row-reverse" }}
          >
            <ProjectDetails project={project} />
            <ProjectScreenShots project={project} />
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsPage;
