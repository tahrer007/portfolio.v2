import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);

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
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <div className="closeBox" onClick={() => setshowMenu(!showMenu)}>
          <img
            className="iconsImage"
            src="https://img.icons8.com/external-doodle-bomsymbols-/452/external-close-doodle-web-design-device-set-2-doodle-bomsymbols-.png"
            alt="close icon"
          />
        </div>
        <div className="linkList">
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
    </div>
  );
};

export default NavBar;
