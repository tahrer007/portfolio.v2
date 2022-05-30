import React, { useState } from "react";
import "./contact.scss";
import Form from "../../components/form/Form";
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const successed = () => {
    console.log("succes!!! ");

    setSuccess(true);
  };

  return (
    <section id="contact" className="contactPage">
      <h1>Contact Me</h1>

      <div className="img"></div>
      {success ? (
        <div className="form">thank you !!!</div>
      ) : (
        <Form successed={successed} />
      )}
    </section>
  );
};

export default ContactPage;
