import React, { useState } from "react";
import "./form.scss";

const Form = () => {
  const handleLink = (link) => window.open(link);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const handelSubmit =(e)=>{

    console.log(e)
      e.preventDefault(); 
  }

  return (
    <div className="formWraper">
        <h3>Lets get in touch</h3>
      <form onSubmit={handelSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={(text)=>setName(text)} value={name}/>
        </label>

        <label>
          Email:
          <input type="email" name="email" onChange={(text)=>setEmail(text)} value={email} />
        </label>

        <label>
          Message:
          <textarea value={message} onChange={(text)=>setmessage(text)} rows="6" cols="50" />
        </label>
        <input type="submit" value="Submit" className="btn"/>
      </form>
    </div>
  );
};

export default Form;
