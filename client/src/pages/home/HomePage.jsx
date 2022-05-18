import React from "react";
import "../../app.css"
import "./home.css"

const HomePage = () => {
  const handleClick =(e)=>{
    
    //e.preventDefault();
  }
  return (<div className="page homePage">
    <div> Hello, I'm Matthew Williams.
I'm a full-stack web developer.


 </div>
 <button onClick={handleClick}> view my work</button>
    
  
  </div>);
};

export default HomePage;
