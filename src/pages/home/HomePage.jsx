import React from "react";
import "./home.scss";

const HomePage = () => {
  const handleClick = (e) => {
    //e.preventDefault();
    //resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="home" className="homePage">
      <div className="left">
        <div> Hello, I'm Tahrer Abu Diab. I'm a full-stack web developer.</div>
        <button onClick={handleClick}> view my work</button>
      </div>
      <div className="right">

      </div>
    </div>
  );
};

export default HomePage;
