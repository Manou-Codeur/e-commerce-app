import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import Search from "./search/search";
import Singin from "./singin/singin";
import SingUp from "./singup/singup";
import MobileNavBar from "./mobileNavBar/mobileNavBar";
import PasswordReset from "./singin/passwordReset/passwordReset";
import FirebaseContext from "../../../server/firebase/firebaseContext";

import "./navBar.scss";
import Logo from "../../../assets/img/logo.png";

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [singupOpen, setSingupOpen] = useState(false);
  const [passwordResetOpen, setPasswordReset] = useState(false);

  const { firebase } = useContext(FirebaseContext);

  //get the card length from redux store
  const cardLength = useSelector(({ cardReducer }) => {
    let length = 0;
    const products = cardReducer.products;

    for (let product of products) {
      length += product.amount;
    }

    return length;
  });

  const userAuthed = useSelector(({ authReducer }) => authReducer.userAuthed);

  const SingOut_SingIn = () => {
    //sing out
    if (userAuthed) {
      localStorage.setItem("user-authed", JSON.stringify(false));
      firebase.doSignOut();
      window.location.reload();
    }

    //sing in
    else {
      setLoginOpen(true);
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
        <a className="nav-bar__links" onClick={SingOut_SingIn} id="singIn">
          {userAuthed ? "Sing Out" : "Sing In"}
        </a>
        <Link className="nav-bar__links" to="/bag">
          {`My Card (${cardLength})`}
        </Link>
        {userAuthed && (
          <Link className="nav-bar__links" to="/profile">
            My Profile
          </Link>
        )}
      </div>

      {/* Down here is the mobile version of this nav bar */}
      <MobileNavBar
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        setSearchOpen={setSearchOpen}
        SingOut_SingIn={SingOut_SingIn}
        userAuthed={userAuthed}
        cardLength={cardLength}
      />

      {/* down here is the condition rendering of search and authentification components */}
      <AnimatePresence>
        {searchOpen && <Search closeSearch={() => setSearchOpen(false)} />}

        {loginOpen && (
          <Singin
            closeLogin={() => setLoginOpen(false)}
            openSingUp={() => setSingupOpen(true)}
            openPasswordReset={() => setPasswordReset(true)}
            firebase={firebase}
          />
        )}

        {singupOpen && (
          <SingUp
            closeSingup={() => setSingupOpen(false)}
            firebase={firebase}
          />
        )}

        {passwordResetOpen && (
          <PasswordReset
            closePasswordReset={() => setPasswordReset(false)}
            firebase={firebase}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
