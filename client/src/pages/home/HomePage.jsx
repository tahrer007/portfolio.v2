import React from "react";
import "../../app.css"
import "./home.css"

const HomePage = () => {
  const handleClick =(e)=>{
    
    //e.preventDefault();
  }
  return (<div className="pages homePage">
    <div> Hello, I'm Tahrer Abu Diab.
I'm a full-stack web developer.


 </div>
 <button onClick={handleClick}> view my work</button>
    
  
  </div>);
};

export default HomePage;
