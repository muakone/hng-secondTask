import React from "react";
import Github from "../images/github.svg";
import Slack from "../images/slack.svg";

const Links = () => {
  return (
    <>
      <div id="links">
        <a
          href="https://training.zuri.team/"
          target="_blank"
          rel="noreferrer"
          id="btn__zuri"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team"
          target="_blank"
          rel="noreferrer"
          id="books"
        >
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Muakone"
          target="_blank"
          rel="noreferrer"
          id="book__python"
        >
          Python Books
        </a>
        <a
          href=" https://background.zuri.team"
          target="_blank"
          rel="noreferrer"
          id="pitch"
        >
          Background Check for Programmers
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noreferrer"
          id="book__design"
        >
          Buy free design books from zuri
        </a>
      </div>
      <div id="icons">
        <img src={Slack} alt="slack-icon" />
        <a href="https://github.com/muakone">
          <img src={Github} alt="github-icon" />
        </a>
      </div>
    </>
  );
};

export default Links;