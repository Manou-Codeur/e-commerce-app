import React from "react";
import jwtGenerator from "jwt-decode";

import Orders from "./orders/orders";
import Account from "./account/account";

import "./profile.scss";

const Profile = ({ history }) => {
  try {
    const jwt = jwtGenerator(JSON.parse(localStorage.getItem("user-authed")));
    var userAuthed = jwt.aud === "react-e-commerce-app-18fea";
  } catch (error) {}

  if (!userAuthed) history.push("/");

  return (
    <div className="profile">
      <div className="profile__main">
        <Account />
        <Orders />
      </div>
    </div>
  );
};

export default Profile;
