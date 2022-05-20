import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link className="navButton" to="/">
        Home
      </Link>
      <Link className="navButton" to="/about">
        About
      </Link>
      <Link className="navButton" to="/projects">
        projects
      </Link>
      <Link className="navButton" to="/contactme">
        contact
      </Link>
      
    </header>
  );
};

export default NavBar;
