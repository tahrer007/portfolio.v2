import React, { useState } from "react";
import "./form.scss";
import { send } from "emailjs-com";

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [responseStatus,setResponseStatus]=useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    send(
      'service_f9u6bx3',
      'template_8wp5khv',
      toSend,
      'x147s0MX4_dldXCgX'
    )
      .then((response) => {
        //console.log('SUCCESS!', response.status, response.text);
        //console.log('SUCCESS!', response.status, response.text);
        setResponseStatus(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setResponseStatus(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="formWraper">
      <h3>Lets get in touch</h3>
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
            value={toSend.reply_to}
            onChange={handleChange}
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
            rows="6"
            cols="50"
          />
        </label>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default Form;
