import React from "react";
import Avatar from "../images/avatar.jpg";

const Profile = () => {
  return (
    <div id="profile">
      <img src={Avatar} alt="dp" id='profile__img' />
        <p id='twitter'>Twitter: <a href="https://twitter.com/muhiz_akanni">muhiz_akanni</a></p>
        <p id='slack'>Muakone</p>
    </div>
  );
};

export default Profile;