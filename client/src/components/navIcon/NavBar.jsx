import React  ,{useState} from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //const [showNav,setShowNav]=useState(false);

  return (
    <header className="navContainer">
      <div className="navIcon">
        icon
      </div>
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
     
      
    </header>
  );
};

export default NavBar;
