import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Search from "./../search/search";

import "./navBar.scss";
import Logo from "../../../assets/logo.png";

const NavBar = () => {
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
        <a href="#" className="nav-bar__links">
          Search
        </a>
        <a href="#" className="nav-bar__links">
          Sing In
        </a>
        <Link className="nav-bar__links" to="/cart">
          MyCart(1)
        </Link>
      </div>

      {/* Down here is the mobile version of this nav bar */}
      <ion-icon
        name="menu"
        className="nav-bar__menu-bar"
        onClick={showMenu}
      ></ion-icon>

      <div className="nav-bar__mobile" ref={mobileNav}>
        <ion-icon
          name="close"
          className="nav-bar__close"
          onClick={hideMenu}
        ></ion-icon>

        <Link className="nav-bar__links--white" to="/men">
          Men
        </Link>
        <Link className="nav-bar__links--white" to="/women">
          Women
        </Link>
        <Link className="nav-bar__links--white" to="/kid">
          Kids
        </Link>
        <a href="#" className="nav-bar__links--white">
          Search
        </a>
        <a href="#" className="nav-bar__links--white">
          Sing In
        </a>
        <Link className="nav-bar__links--white" to="/cart">
          MyCart(1)
        </Link>
      </div>

      {/* down here is the condition rendering of search and sing in components */}
      {/* <Search /> */}
    </div>
  );
};

export default NavBar;
