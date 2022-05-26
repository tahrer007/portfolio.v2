import React from "react";
import "./personalDetails.css";
import { aboutMe } from "../../data/aboutPageData";

const PersonalDetails = () => {
  const handleLink = (link) => window.open(link);

  return (
    <div className="personalDetails">
      <div className="profilePic"></div>

      <div className="pDetails">{aboutMe}</div>
      <div>
      <button className="linkBtn" onClick={() => handleLink("test!!!")}>
        Download Resume
      </button>
      icons   

      </div>
    </div>
  );
};

export default PersonalDetails;
