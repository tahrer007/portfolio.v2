import React from "react";
import "./personalDetails.scss";
import { aboutMe } from "../../data/personalData";

const PersonalDetails = () => {
  const handleLink = (link) => window.open(link);

  return (
    <div className="personalDetails">
      <div className="profilePic"></div>

      <div className="pDetails">{aboutMe}</div>
     
    </div>
  );
};

export default PersonalDetails;
