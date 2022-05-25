import React ,{useEffect,useState} from "react";
import "./projectScreenShots.css";

const ProjectScreenShots = ({ project }) => {
  const clickRight =()=>console.log("right")
  const clickLeft =()=>console.log("Left")
  return (
    <div className=" centerFlex screenShotsWraper">
      <div className="centerFlex sideBtn" onClick={clickLeft}>left</div>
      <div className="centerFlex mainImage">middle</div>
      <div className="centerFlex sideBtn" onClick={clickRight} >right</div>
    </div>
  );
};

export default ProjectScreenShots;
