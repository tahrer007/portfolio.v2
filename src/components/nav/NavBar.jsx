import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);
  

  useEffect(()=>{
    
  },[])
  return (
    <div className="navContainer">
      {!showMenu && (
        <div className="navCircle" onClick={() => setshowMenu(!showMenu)}>
          <img
            className="iconsImage"
            src="https://img.icons8.com/ios-filled/344/menu--v1.png"
            alt="burger icon"
          />
        </div>
      )}

      <div
        className="menuWraper"
        style={showMenu ? { visibility: "visible" } : { display: "none" }}
      >
        <div className="closeBox" onClick={() => setshowMenu(!showMenu)}>
          <img
            className="iconsImage"
            src="https://img.icons8.com/external-doodle-bomsymbols-/452/external-close-doodle-web-design-device-set-2-doodle-bomsymbols-.png"
            alt="close icon"
          />
        </div>
        <div className="linkList">
          <Link className="link" to="/" onClick={()=>setshowMenu(!showMenu)}>
            Home
          </Link>
          <Link className="link" to="/about" onClick={()=>setshowMenu(!showMenu)}>
            About
          </Link>
          <Link className="link" to="/projects" onClick={()=>setshowMenu(!showMenu)} >
            projects
          </Link>
          <Link className="link" to="/contactme" onClick={()=>setshowMenu(!showMenu)}>
            contact
          </Link>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
