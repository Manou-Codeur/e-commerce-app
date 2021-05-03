import React from "react";
import jwtGenerator from "jwt-decode";
import { Redirect } from "react-router-dom";

import Orders from "./orders/orders";
import Account from "./account/account";

import "./profile.scss";

const Profile = () => {
  try {
    var jwt = jwtGenerator(JSON.parse(localStorage.getItem("user-authed")));
    var userAuthed = jwt.aud === "react-e-commerce-app-18fea";
  } catch (error) {
    userAuthed = false;
  }

  if (userAuthed)
    return (
      <div className="profile">
        <div className="profile__main">
          <Account />
          <Orders uid={jwt.user_id} />
        </div>
      </div>
    );
  else return <Redirect to="/" />;
};

export default Profile;
