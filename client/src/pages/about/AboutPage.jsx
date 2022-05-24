import React from "react";
import SkillCards from "../../components/skillCard/SkillCard";
import "../../app.css";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="pages aboutPage">
      <div className="title">
       
        <h1>about</h1>
      </div>
      <SkillCards />
      <div className="detailsContainer">
        <div className="personalDetails">personal details </div>
        <div className="skillsChart">charts </div>
      </div>
    </div>
  );
};

export default AboutPage;
