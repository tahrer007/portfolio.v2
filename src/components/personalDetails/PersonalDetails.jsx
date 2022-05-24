import React from "react";
import "./personalDetails.css";
import { aboutMe } from "../../data/AboutPageData";

const PersonalDetails = () => {
  return (
    <div className="personalDetails">
      <div className="profilePic"></div>
      <div className="pDetails">{aboutMe}</div>
    </div>
  );
};

export default PersonalDetails;
