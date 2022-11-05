import React, { useRef } from "react";

const Contact = () => {
  const name = "Muhiz Akanni";
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const textareaRef = useRef();
  const checkStateRef = useRef(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${fnameRef.current.value} your message has been sent`);
    e.target.reset();
  };
  return (
    <div id="contact-me">
      <h2>Contact Me</h2>
      <p className="contact-me__para">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <div className="fname">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              name="fname"
              id="first_name"
              placeholder="Enter your first name"
              ref={fnameRef}
              required
            />
            <p className="error" id="error__fname">
              Please enter your first Name
            </p>
          </div>
          <div className="lname">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              name="lname"
              id="last_name"
              placeholder="Enter your last name"
              ref={lnameRef}
              required
            />
            <p className="error" id="error__lname">
              Please enter your last Name
            </p>
          </div>
        </div>
        <div className="email-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            ref={emailRef}
            required
          />
          <p className="error" id="error__email">
            Please enter your email
          </p>
        </div>
        <div className="textarea">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and i'll reply you as soon as possible... "
            ref={textareaRef}
            required
          />
          <p className="error" id="error__message">
            Please enter your message
          </p>
        </div>
        <div className="agreement">
          <input type="checkbox" id="checkbox" ref={checkStateRef} required />
          <p>You agree to providing your data to {name} who may contact you.</p>
        </div>
        <button id="btn__submit" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
