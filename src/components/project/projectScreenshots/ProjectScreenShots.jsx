import React, { useEffect, useState } from "react";
import "./projectScreenShots.css";

const ProjectScreenShots = ({ project }) => {
  const length = project.screenshots.length;
  const [mainImgIdx, SetMainImgIdx] = useState(0);
  const clickRight = () =>
    mainImgIdx === length - 1 ? SetMainImgIdx(0) : SetMainImgIdx((prev)=>prev+1);
  const clickLeft = () =>
    mainImgIdx === 0 ? SetMainImgIdx(length - 1) : SetMainImgIdx((prev)=>prev-1);

  //const selectImage =(index)=> SetMainImgIdx(index)
  return (
    <div className=" centerFlex screenShotsWraper">
      <div className="centerFlex sideBtn" onClick={clickLeft}>
        left
      </div>
      <div
        className="centerFlex  background mainImage"
        style={{ backgroundImage: `url(${project?.screenshots[mainImgIdx]})` }}
      ></div>
      <div className="centerFlex sideBtn" onClick={clickRight}>
        right
      </div>
      <div className="smallCorsela">
        {project?.screenshots.map((src, index) => {
          return (
            <div
              key={index}
              className={`centerFlex background smallImage ${(index===mainImgIdx) ? "selectedIcon" : ""}`}
              style={{ backgroundImage: `url(${src})`}}
              onClick={() => SetMainImgIdx(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectScreenShots;
