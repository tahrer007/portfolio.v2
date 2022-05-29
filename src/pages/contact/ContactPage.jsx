import React from "react";
import "./contact.css";
import ContactIcons from "../../components/contacticons/ContactIcons";

const ContactPage = () => {
  return <section id="contact" className="sections contactPage">
    <h1>Let's get in touch 😉</h1>
        <ContactIcons/>

        <footer> ©2022 Tahrer Abu Diab</footer>
  </section>;
};

export default ContactPage;
