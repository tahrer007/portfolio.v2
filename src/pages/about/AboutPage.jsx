import React from "react";
import SkillCards from "../../components/skillCard/SkillCard";
import PersonalDetails from "../../components/personalDetails/PersonalDetails";
import  Chart  from "../../components/chart/Chart";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="pages aboutPage">
      <div className="title">
       
        <h1>about</h1>
      </div>
      <SkillCards />
      <div className="detailsContainer">
        <PersonalDetails/>
        <div className="skillsChart"><Chart/> </div>
      </div>
    </div>
  );
};

export default AboutPage;
