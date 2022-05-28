import React, { useState, useEffect } from "react";
import "./technicalSkills.scss";
import { technicalSkillsDetails } from "../../data/technicalSkills";
import parse from "html-react-parser";

const TechnicalSkills = () => {
  return (
    <div className="technicalSkills">
      {technicalSkillsDetails.map((skill) => {
        return (
          <div key={skill.id} className="card">
          {parse(skill.svg)}
          <p className="name">{skill.name}</p>
           
          </div>
        );
      })}
    </div>
  );
};

export default TechnicalSkills;
