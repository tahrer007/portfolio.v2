import React from "react";
import "./contactIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcons = () => {
  const handleLink = (link) => window.open(link);

  return (
    <div className="contactIconsWraper">
      test
      <FontAwesomeIcon icon="fa-brands fa-github" />{" "}
    </div>
  );
};

export default ContactIcons;
