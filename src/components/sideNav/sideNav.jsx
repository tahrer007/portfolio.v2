import React, { useState , useEffect } from "react";
import "./nav.scss";

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
        <a href={"#home"} onClick={()=>setshowMenu(!showMenu)}> home </a>
        <a href={"#about"} onClick={()=>setshowMenu(!showMenu)}> about </a>
        <a href={"#projects"} onClick={()=>setshowMenu(!showMenu)}> projects </a>
        <a href={"#contact"} onClick={()=>setshowMenu(!showMenu)}> contact </a>
          
      </div>
      </div>
    </div>
  );
};

export default NavBar;
