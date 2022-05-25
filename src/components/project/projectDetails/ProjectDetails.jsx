import React from "react";
import "./projectDetails.css";

const ProjectDetails = ({ project }) => {
  const handleLink = (link) => window.open(link);

  return (
   
        <div className="projectDetailsBox">
          <div className="text">
            <h3>{project.title}</h3>
            <section>{project.description} </section>
          </div>
          <div className="linkes">
            <button onClick={() => handleLink(project.links.website)}>
              View Site
            </button>
            <button onClick={() => handleLink(project.links.code)}>Repo</button>
          </div>
          <div className="skillIconsBox">
            <img
              className="skillIcon"
              src={"https://www.chartjs.org/media/logo-title.svg"}
              alt="test"
            />
          </div>
        </div>
    
  );
};

export default ProjectDetails;
