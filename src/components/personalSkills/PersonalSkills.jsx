import React, { useEffect } from "react";
import "./personalSkills.scss";
import { skillsDetails } from "../../data/personalData";

const PersonalSkills = () => {
  useEffect(() => {
    console.log(skillsDetails[0].title);
  }, []);

  return (
    <div className="personalSkills">
      {skillsDetails.map((skill, index) => {
        return (
          <div className="skillCard" key={index}>
            <div
              className="bgImage icon"
              style={{ backgroundImage: `url(${skill.url})` , backgroundSize :"contain" }}
            ></div>
            <div className="description">{skill.details}</div>
          </div>
        );
      })}
    </div>
  );
};
export default PersonalSkills;
