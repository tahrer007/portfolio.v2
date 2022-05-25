import React, { useEffect, useState } from "react";
import "./projectScreenShots.css";

const ProjectScreenShots = ({ project }) => {
  const length = project.screenshots.length;
  const [mainImgIdx, SetMainImgIdx] = useState(0);
  const clickRight = () =>
    mainImgIdx === length - 1 ? SetMainImgIdx(0) : SetMainImgIdx(length - 1);
  const clickLeft = () =>
    mainImgIdx === 0 ? SetMainImgIdx(length - 1) : SetMainImgIdx(0);
  return (
    <div className=" centerFlex screenShotsWraper">
      <div className="centerFlex sideBtn" onClick={clickLeft}>
        left
      </div>
      <div
        className="centerFlex mainImage"
        style={{ backgroundImage: `url(${project?.screenshots[mainImgIdx]})` }}
      ></div>
      <div className="centerFlex sideBtn" onClick={clickRight}>
        right
      </div>
    </div>
  );
};

export default ProjectScreenShots;
