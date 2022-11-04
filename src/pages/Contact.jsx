import React, { useState } from "react";

const Contact = () => {
  const name = "Muhiz Akanni";
  const [fnameRef, setFnameRef] = useState("");
  const [lnameRef, setLnameRef] = useState("");
  const [emailRef, setEmailRef] = useState("");
  const [textareaRef, setTextareaRef] = useState("");
  const [checkState, setCheckState] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fnameRef, lnameRef, emailRef, textareaRef, checkState);
  };
  return (
    <div id="contact-me">
      <h2>Contact Me</h2>
      <p className="contact-me__para">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form>
        <div className="name">
          <div className="fname">
            <label>First name</label>
            <input
              type="text"
              name="fname"
              id="first_name"
              placeholder="Enter your first name"
              value={fnameRef}
              onChange={(e) => setFnameRef(e.target.value)}
              required
            />
            <p className="error" id="error__fname">
              Please enter your first Name
            </p>
          </div>
          <div className="lname">
            <label>Last name</label>
            <input
              type="text"
              name="lname"
              id="last_name"
              placeholder="Enter your last name"
              value={lnameRef}
              onChange={(e) => setLnameRef(e.target.value)}
              required
            />
            <p className="error" id="error__lname">
              Please enter your last Name
            </p>
          </div>
        </div>
        <div className="email-div">
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            value={emailRef}
            onChange={(e) => setEmailRef(e.target.value)}
            required
          />
          <p className="error" id="error__email">
            Please enter your email
          </p>
        </div>
        <div className="textarea">
          <label>Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and i'll reply you as soon as possible... "
            value={textareaRef}
            onChange={(e) => setTextareaRef(e.target.value)}
            required
          />
          <p className="error" id="error__message">
            Please enter your message
          </p>
        </div>
        <div className="agreement">
          <input
            type="checkbox"
            id="checkbox"
            value={checkState}
            onChange={(e) => setCheckState(e.target.value)}
            required
          />
          <p>You agree to providing your data to {name} who may contact you.</p>
        </div>
        <button id="btn__submit" onClick={(e) => handleSubmit(e.target.value)}>Send message</button>
      </form>
    </div>
  );
};

export default Contact;
