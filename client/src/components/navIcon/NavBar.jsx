import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const NavBar = () => {
  const [showMenu,setshowMenu]=useState(false);

  return (
    <div className="navContainer">
      {!showMenu &&<div className="navCircle" onClick={()=>setshowMenu(!showMenu)}></div>}
      <div className="menuWraper">
        
       {/* <Link className="navItem" to="/">
          Home
        </Link>
        <Link className="navItem" to="/about">
          About
        </Link>
        <Link className="navItem" to="/projects">
          projects
        </Link>
        <Link className="navItem" to="/contactme">
          contact
  </Link>*/}
  </div>
    </div>
  );
};

export default NavBar;
