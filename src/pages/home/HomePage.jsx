import React from "react";
import "./home.scss";
import {resumeLink}from "../../data/personalData"
import ResumeBtn from "../../components/resumeBtn/ResumeBtn";

const HomePage = () => {
  const handleClick = (e) => window.open(resumeLink);
  return (
    <section id="home" className="homePage">
      <div className="left">
        <p className="p1"> Hi, I'm</p>
        <p className="p2"> Tahrer Abu Diab</p>
        <p className="p3"> Full-Stack Developer</p>
        <ResumeBtn/>
      </div>
      <div className="right"></div>
    </section>
  );
};

export default HomePage;
