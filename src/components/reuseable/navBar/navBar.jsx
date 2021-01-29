import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import jwtGenerator from "jwt-decode";

import Search from "./search/search";
import Singin from "./singin/singin";
import SingUp from "./singup/singup";
import MobileNavBar from "./mobileNavBar/mobileNavBar";
import PasswordReset from "./singin/passwordReset/passwordReset";
import Firebase from "./../../../server/firebase/firebase-config";

import "./navBar.scss";
import Logo from "../../../assets/img/logo.png";

const firebase = new Firebase();

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [singupOpen, setSingupOpen] = useState(false);
  const [passwordResetOpen, setPasswordReset] = useState(false);
  //this state is used to force rerendering login/logout
  const [render, setRender] = useState(false);

  //I wrapper this code in trycatch coz the jwtGenerator() throw an error if the string passed isn't valid jwt code
  try {
    const jwt = jwtGenerator(JSON.parse(localStorage.getItem("user-authed")));
    var userAuthed = jwt.aud === "react-e-commerce-app-18fea";
  } catch (error) {}

  const SingOut_SingIn = () => {
    //sing out
    if (userAuthed) {
      localStorage.setItem("user-authed", JSON.stringify(false));
      firebase.doSignOut();
      setRender(prev => !prev);
    }

    //sing in
    else {
      setLoginOpen(true);
      setRender(prev => !prev);
    }
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar__left-part">
        <Link className="nav-bar__links" to="/men">
          Men
        </Link>
        <Link className="nav-bar__links" to="/women">
          Women
        </Link>
        <Link className="nav-bar__links" to="/kids">
          Kids
        </Link>
      </div>

      <a href="/home">
        <img className="nav-bar__logo" src={Logo} alt="logo" />
      </a>

      <div className="nav-bar__right-part">
        <a className="nav-bar__links" onClick={() => setSearchOpen(true)}>
          Search
        </a>
        <a className="nav-bar__links" onClick={SingOut_SingIn}>
          {userAuthed ? "Sing Out" : "Sing In"}
        </a>
        <Link className="nav-bar__links" to="/bag">
          MyCart(1)
        </Link>
      </div>

      {/* Down here is the mobile version of this nav bar */}
      <MobileNavBar
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        setSearchOpen={setSearchOpen}
        SingOut_SingIn={SingOut_SingIn}
        userAuthed={userAuthed}
      />

      {/* down here is the condition rendering of search and authentification components */}
      <AnimatePresence>
        {searchOpen ? (
          <Search closeSearch={() => setSearchOpen(false)} />
        ) : null}

        {loginOpen ? (
          <Singin
            closeLogin={() => setLoginOpen(false)}
            openSingUp={() => setSingupOpen(true)}
            openPasswordReset={() => setPasswordReset(true)}
            firebase={firebase}
          />
        ) : null}

        {singupOpen ? (
          <SingUp
            closeSingup={() => setSingupOpen(false)}
            firebase={firebase}
          />
        ) : null}

        {passwordResetOpen ? (
          <PasswordReset
            closePasswordReset={() => setPasswordReset(false)}
            firebase={firebase}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
