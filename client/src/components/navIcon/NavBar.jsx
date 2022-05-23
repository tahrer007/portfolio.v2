import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const NavBar = () => {
  //const [showNav,setShowNav]=useState(false);

  return (
    <div className="navContainer">
      <div className="navIcon">icon</div>
      <div className="navMenu">
        <Link className="navItem" to="/">
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
        </Link>
  </div>
    </div>
  );
};

export default NavBar;
