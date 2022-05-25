import React ,{useEffect,useState} from "react";
import "./projectScreenShots.css";

const ProjectScreenShots = ({ project }) => {
  return (
    <div className=" centerFlex screenShotsWraper">
      <div className="centerFlex sideBtn">left</div>
      <div className="centerFlex mainImage">middle</div>
      <div className="centerFlex sideBtn">right</div>
    </div>
  );
};

export default ProjectScreenShots;
