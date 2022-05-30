import React from "react";
import "./contact.scss";
import ContactIcons from "../../components/contacticons/ContactIcons";
import Form from "../../components/form/Form";
const ContactPage = () => {
  return (
    <section id="contact" className="contactPage">
      <h1>Contact Me</h1>

      <div className="img"></div>
      <Form/>
      
    </section>
  );
};

export default ContactPage;
