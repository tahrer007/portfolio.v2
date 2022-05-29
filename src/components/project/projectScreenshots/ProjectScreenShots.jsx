import React, { useEffect, useState } from "react";
import "./projectScreenShots.scss";

const ProjectScreenShots = ({ project }) => {
  const length = project.screenshots.length;
  const [mainImgIdx, SetMainImgIdx] = useState(0);
  const clickRight = () =>
    mainImgIdx === length - 1
      ? SetMainImgIdx(0)
      : SetMainImgIdx((prev) => prev + 1);
  const clickLeft = () =>
    mainImgIdx === 0
      ? SetMainImgIdx(length - 1)
      : SetMainImgIdx((prev) => prev - 1);

  //const selectImage =(index)=> SetMainImgIdx(index)
  return (
    <div className=" centerFlex screenShotsWraper">
      <div className="centerFlex sideBtn" onClick={clickLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
        </svg>
      </div>
      <div
        className="centerFlex  corselaBg mainImage"
        style={{ backgroundImage: `url(${project?.screenshots[mainImgIdx]})` }}
      ></div>
      <div className="centerFlex sideBtn" onClick={clickRight}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
        </svg>
      </div>
      <div className="smallCorsela">
        {project?.screenshots.map((src, index) => {
          return (
            <div
              key={index}
              className={`centerFlex corselaBg smallImage ${
                index === mainImgIdx ? "selectedIcon" : ""
              }`}
              style={{ backgroundImage: `url(${src})` }}
              onClick={() => SetMainImgIdx(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectScreenShots;
