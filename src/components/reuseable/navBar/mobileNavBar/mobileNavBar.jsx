import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import { ReactComponent as Menu } from "../../../../assets/img/menu.svg";

const MobileNavBar = ({
  setMenuOpen,
  menuOpen,
  setSearchOpen,
  SingOut_SingIn,
  userAuthed,
}) => {
  return (
    <Fragment>
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
        <Link className="nav-bar__links--white" to="/kids">
          Kids
        </Link>
        <a
          className="nav-bar__links--white"
          onClick={() => setSearchOpen(true)}
        >
          Search
        </a>
        <a className="nav-bar__links--white" onClick={SingOut_SingIn}>
          {userAuthed ? "Sing Out" : "Sing In"}
        </a>
        <Link className="nav-bar__links--white" to="/bag">
          MyCart(1)
        </Link>
      </motion.div>
    </Fragment>
  );
};

export default MobileNavBar;
