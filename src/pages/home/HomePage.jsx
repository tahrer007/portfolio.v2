import React from "react";
import "./home.scss";

const HomePage = () => {
  const handleClick = (e) => {
    //https://drive.google.com/file/d/1vx50mpesNH79lXnLoKQRtM_ZN8C7GChv/view?usp=sharing
    //e.preventDefault();
  }
  return (
    <section id="home" className="homePage">
      <div className="left">
        <div> Hello, I'm Tahrer Abu Diab. I'm a full-stack web developer.</div>
        <button onClick={handleClick}> view my work</button>
      </div>
      <div className="right">

      </div>
    </section>
  );
};

export default HomePage;
