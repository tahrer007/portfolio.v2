import React  ,{useState} from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //const [showNav,setShowNav]=useState(false);

  return (
    <header className="">
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
