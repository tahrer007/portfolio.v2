import React from "react";
import PersonalSkills from "../../components/personalSkills/PersonalSkills";
import PersonalDetails from "../../components/personalDetails/PersonalDetails";
import TechnicalSkills from "../../components/technicalSkills/TechnicalSkills";
import "./about.scss";


const AboutPage = () => {
  return (
    <section id="about" className="about">
      <h1>About Me</h1>
      <PersonalSkills/>
      <div className="lowerContainer">
        <PersonalDetails />
        <TechnicalSkills/>
      </div>
    </section>
  );
};

export default AboutPage;
