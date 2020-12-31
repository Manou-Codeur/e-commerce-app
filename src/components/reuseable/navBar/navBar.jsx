import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Search from "./search/search";
import Singin from "./singin/singin";
import SingUp from "./singup/singup";

import "./navBar.scss";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as Close } from "../../../assets/img/close.svg";
import { ReactComponent as Menu } from "../../../assets/img/menu.svg";

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [singupOpen, setSingupOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="nav-bar__left-part">
        <Link className="nav-bar__links" to="/men">
          Men
        </Link>
        <Link className="nav-bar__links" to="/women">
          Women
        </Link>
        <Link className="nav-bar__links" to="/kid">
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
        <a className="nav-bar__links" onClick={() => setLoginOpen(true)}>
          Sing In
        </a>
        <Link className="nav-bar__links" to="/cart">
          MyCart(1)
        </Link>
      </div>

      {/* Down here is the mobile version of this nav bar */}
      <Menu
        className="nav-bar__menu-bar"
        onClick={() => setMenuOpen(true)}
        stroke="black"
      />

      <motion.div
        animate={!menuOpen ? { left: "100%" } : { left: 0 }}
        transition={{ duration: 0.4 }}
        className="nav-bar__mobile"
      >
        <Close
          className="nav-bar__close"
          onClick={() => setMenuOpen(false)}
          fill="white"
        />

        <Link className="nav-bar__links--white" to="/men">
          Men
        </Link>
        <Link className="nav-bar__links--white" to="/women">
          Women
        </Link>
        <Link className="nav-bar__links--white" to="/kid">
          Kids
        </Link>
        <a
          className="nav-bar__links--white"
          onClick={() => setSearchOpen(true)}
        >
          Search
        </a>
        <a className="nav-bar__links--white" onClick={() => setLoginOpen(true)}>
          Sing In
        </a>
        <Link className="nav-bar__links--white" to="/cart">
          MyCart(1)
        </Link>
      </motion.div>

      {/* down here is the condition rendering of search and authentification components */}
      <AnimatePresence>
        {searchOpen ? (
          <Search closeSearch={() => setSearchOpen(false)} />
        ) : null}

        {loginOpen ? (
          <Singin
            closeLogin={() => setLoginOpen(false)}
            openSingUp={() => setSingupOpen(true)}
          />
        ) : null}

        {singupOpen ? (
          <SingUp closeSingup={() => setSingupOpen(false)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
