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
  cardLength,
}) => {
  const closeNavBarSlider = ({ target }) => {
    if (target.className !== "nav-bar__mobile") setMenuOpen(false);
  };

  return (
    <Fragment>
      <Menu
        className="nav-bar__menu-bar"
        stroke="black"
        onClick={() => setMenuOpen(true)}
      />

      <motion.div
        animate={!menuOpen ? { left: "100%" } : { left: 0 }}
        transition={{ duration: 0.4 }}
        className="nav-bar__mobile"
        onClick={closeNavBarSlider}
      >
        <Close className="nav-bar__close" fill="white" />

        <Link className="nav-bar__links--white" to="/men">
          Men
        </Link>
        <Link className="nav-bar__links--white" to="/women">
          Women
        </Link>
        <Link className="nav-bar__links--white" to="/kids">
          Kids
        </Link>
        <Link
          className="nav-bar__links--white"
          onClick={() => setSearchOpen(true)}
        >
          Search
        </Link>
        <Link className="nav-bar__links--white" onClick={SingOut_SingIn}>
          {userAuthed ? "Sing Out" : "Sing In"}
        </Link>
        <Link className="nav-bar__links--white" to="/bag">
          {`My Card (${cardLength})`}
        </Link>
        {userAuthed && (
          <Link className="nav-bar__links--white" to="/profile">
            My Profile
          </Link>
        )}
      </motion.div>
    </Fragment>
  );
};

export default MobileNavBar;
