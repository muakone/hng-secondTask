import React from "react";
import I4GLogo from "../images/I4G.png";
import ZuriLogo from "../images/hng.svg";

const Footer = () => {
  return (
    <div id="footer">
      <img src={ZuriLogo} alt="zuri-logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4GLogo} alt="I4G-logo" />
    </div>
  );
};

export default Footer;