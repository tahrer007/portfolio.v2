import React, { useEffect, useState } from "react";
import "./projectDetails.scss";
import { technologiesIcons } from "../../../data/projectsData";

const ProjectDetails = ({ project }) => {
  const handleLink = (link) => window.open(link);
  const skillIcon = (index) => technologiesIcons.find((x) => x.id === index);
  const [skillsDetails, setSkillsDetails] = useState([]);

  useEffect(() => {
    
    const arr = project.technologies.map((skill) => skillIcon(skill));
    setSkillsDetails(arr);
  }, [project?.technologies]);

  return (
    <div className="projectDetailsWraper">
      <div className="text">
        <h3>{project.title}</h3>
        <section className="discriptions">{project.description} </section>
      </div>
      <div className="btnsWraper">
        <button
          className="repoBtn"
          onClick={() => handleLink(project.links.website)}
        >
          View Site
        </button>
        <button
          className="websiteBtn"
          onClick={() => handleLink(project.links.code)}
        >
          Repo
        </button>
      </div>
      <div className="skillIconsBox">
        {skillsDetails.map((skill) => {
          return (
            <img
              key={skill.id}
              className="skillIcon"
              src={skill.src}
              alt={skill.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
