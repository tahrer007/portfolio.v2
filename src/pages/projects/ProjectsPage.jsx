import React, { useEffect, useState } from "react";
import "./projects.scss";
import ProjectDetails from "../../components/project/projectDetails/ProjectDetails";
import ProjectScreenShots from "../../components/project/projectScreenshots/ProjectScreenShots";
import { technologiesIcons, projectsData } from "../../data/projectsData";
import { isMobile } from "react-device-detect";
const WIDTH = 700;

const ProjectsPage = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  const changeDrection = (id) => {
    //console.log(windowDimenion);
    if (isMobile || windowDimenion.winWidth <= WIDTH) return "";
    return id % 2 ? "row" : "row-reverse";
  };

  useEffect(() => {
    detectSize();
  }, []);

  return (
    <section id="projects" className="sectionsWraper">
      <div className="space"></div>
      <div className="pages projectsPage" style={{ height: "fit-content" }}>
        <h1>
          My<span className="greenFont"> Projects</span>
        </h1>

        {projectsData
          ? projectsData.map((project) => {
              return (
                <div
                  key={project.id}
                  s
                  className="projectContainer"
                  style={{ flexDirection: changeDrection(project.id % 2) }}
                >
                  <ProjectDetails project={project} />
                  <ProjectScreenShots project={project} />
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default ProjectsPage;
