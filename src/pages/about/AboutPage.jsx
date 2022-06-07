import React from "react";
import PersonalSkills from "../../components/personalSkills/PersonalSkills";
import PersonalDetails from "../../components/personalDetails/PersonalDetails";
import TechnicalSkills from "../../components/technicalSkills/TechnicalSkills";
import "./about.scss";


const AboutPage = () => {
  return (
    <section id="about" className="">
      <div className="space"></div>
      <div className="pages about">
      <div className="title">
      <h1>About<span className="greenFont"> Me</span></h1>
      </div>
      
      <PersonalSkills/>
      <div className="lowerContainer">
        <PersonalDetails />
        <TechnicalSkills/>
      </div>

      </div>
      
    </section>
  );
};

export default AboutPage;
