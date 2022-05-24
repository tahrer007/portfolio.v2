import React from "react";
import "../../app.css" ;
import "./about.css";



const AboutPage = () => {
  return (
    <div className="pages aboutPage">
     <div className="title"> <h1>about</h1> </div> 
      <div className="skillsIconsContainer"> skills icons  </div>
      <div className="detailsContainer"> 
          personal data and chart 
          <div className="personalDetails">personal details </div>
          <div className="skillsChart">charts </div>

      </div>
    </div>
  );
};

export default AboutPage;
