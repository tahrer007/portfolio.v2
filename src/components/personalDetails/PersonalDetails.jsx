import React from "react";
import "./personalDetails.scss";
import { aboutMe } from "../../data/personalData";
import ResumeBtn from "../resumeBtn/ResumeBtn";
import parse from "html-react-parser";

const PersonalDetails = () => {
  const handleLink = (link) => window.open(link);

  return (
    <div className="personalDetails">
      <div className="bgImage profilePic"></div>

      <div className="pDetails"> {parse(aboutMe)}</div>
      <ResumeBtn />
    </div>
  );
};

export default PersonalDetails;
