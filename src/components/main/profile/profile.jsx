import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Orders from "./orders/orders";
import Account from "./account/account";

import "./profile.scss";

const Profile = () => {
  const userAuthed = useSelector(({ authReducer }) => authReducer.uid);

  if (userAuthed)
    return (
      <div className="profile">
        <div className="profile__main">
          <Account />
          <Orders uid={userAuthed} />
        </div>
      </div>
    );
  else return <Redirect to="/" />;
};

export default Profile;
