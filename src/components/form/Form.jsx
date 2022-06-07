import React, { useState } from "react";
import "./form.scss";
import { send } from "emailjs-com";
import validator from "validator";

const Form = ({ successed }) => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [faild, setFaild] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(validator.isEmail(toSend.reply_to));
    if (!validator.isEmail(toSend.reply_to)) {
      console.log("invalid error!! ");

      setInvalidEmail(true);
      setTimeout(() => {
        setInvalidEmail(false);
      }, 2000);
      return;
    }

    send("service_f9u6bx3", "template_8wp5khv", toSend, "x147s0MX4_dldXCgX")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        successed();
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFaild(true);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactRightSide formWraper">
      <h3>
        Lets <span className="greenFont">get</span> in{" "}
        <span className="greenFont">touch</span>
      </h3>
      <form onSubmit={handelSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="from_name"
            placeholder="to name"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            onChange={handleChange}
            value={invalidEmail ? "Please enter valid e-mail" : toSend.reply_to}
            className={`${invalidEmail ? "invalidMail" : ""}`}
          />
        </label>

        <label>
          Message:
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </label>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default Form;
