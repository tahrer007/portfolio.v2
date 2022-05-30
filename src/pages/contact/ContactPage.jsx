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
    <section id="contact" className="contactPage" >
      

      <div className="img"></div>
      {success ? (
        <div className="success">
          <h2> <span className="greenFont"> Thank you </span>for getting in touch!</h2>
        </div>
      ) : (
        <Form successed={successed} />
      )}
    </section>
  );
};

export default ContactPage;
