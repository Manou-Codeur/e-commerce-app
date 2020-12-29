import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Search from "./search/search";

import "./navBar.scss";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as Close } from "../../../assets/img/close.svg";
import { ReactComponent as Menu } from "../../../assets/img/menu.svg";

const NavBar = () => {
  const [searchAsked, setSearchAsked] = useState(false);

  const mobileNav = useRef();

  const showMenu = () => {
    mobileNav.current.style.left = 0;
  };

  const hideMenu = () => {
    mobileNav.current.style.left = "100%";
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
        <Link className="nav-bar__links" to="/kid">
          Kids
        </Link>
      </div>

      <a href="/home">
        <img className="nav-bar__logo" src={Logo} alt="logo" />
      </a>

      <div className="nav-bar__right-part">
        <a className="nav-bar__links" onClick={() => setSearchAsked(true)}>
          Search
        </a>
        <a className="nav-bar__links">Sing In</a>
        <Link className="nav-bar__links" to="/cart">
          MyCart(1)
        </Link>
      </div>

      {/* Down here is the mobile version of this nav bar */}
      <Menu className="nav-bar__menu-bar" onClick={showMenu} stroke="black" />

      <div className="nav-bar__mobile" ref={mobileNav}>
        {/* <img src={Close} className="nav-bar__close" onClick={hideMenu} /> */}
        <Close className="nav-bar__close" onClick={hideMenu} fill="white" />

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
          onClick={() => setSearchAsked(true)}
        >
          Search
        </a>
        <a className="nav-bar__links--white">Sing In</a>
        <Link className="nav-bar__links--white" to="/cart">
          MyCart(1)
        </Link>
      </div>

      {/* down here is the condition rendering of search and singIn components */}
      <AnimatePresence>
        {searchAsked ? (
          <Search changeSearchState={() => setSearchAsked(false)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
