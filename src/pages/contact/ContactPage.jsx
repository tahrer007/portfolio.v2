import React, { useState, useEffect, useRef } from "react";
import "./contact.scss";
import Form from "../../components/form/Form";
import { init } from "ityped";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);

  const text1Ref = useRef();
  const text2Ref = useRef();

  useEffect(() => {
    if (!success) return;

    init(text1Ref.current, {
      showCursor: false,
      //backDelay: 3000,
      typeSpeed: 100,
      disableBackTyping: true,

      strings: ["Thank you "],
    });
    init(text2Ref.current, {
      showCursor: false,
      typeSpeed: 100,
      startDelay: 1500,
      disableBackTyping: true,

      strings: ["for getting in touch!"],
    });
  }, [success]);
  const successed = () => {
    console.log("succes!!! ");

    setSuccess(true);
  };

  return (
    <section id="contact" className="">
      <div className="space">
      <div className="pages contactPage"></div>
      <div className="img"></div>
      {success ? (
        <div className="success">
          <h2>
            {" "}
            <span className="greenFont" ref={text1Ref}></span>
            <span ref={text2Ref}></span>
          </h2>
        </div>
      ) : (
        <Form successed={successed} />
      )}
      </div>
    </section>
  );
};

export default ContactPage;
