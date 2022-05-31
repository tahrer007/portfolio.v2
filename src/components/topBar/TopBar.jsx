import React from "react";
import "./topBar.scss";
import ContactIcons from "./contacticons/ContactIcons";

const TopBar = () => {
  
  return (
    <header className="topBar">
      <ContactIcons />
      <h1 className="copyRights"> ©Tahrer Abu Diab</h1>
    </header>
  );
};

export default TopBar;
