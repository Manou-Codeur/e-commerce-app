import React from "react";

import "./header.scss";
import shoe from "../../../../assets/img/air-jordan.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left-part">
        <div className="center">
          <span className="header__shoe-genre">Men's shoe</span>
          <h1 className="header__shoe-name">
            New Jordan
            <br /> React Elevation
          </h1>
          <button>Check it out</button>
          <div className="header__progress">
            <div className="progress progress--selected"></div>
            <div className="progress"></div>
            <div className="progress"></div>
          </div>
        </div>
      </div>

      <div className="header__right-part">
        <div className="header__shoe-img-wrapper">
          <img className="header__shoe-img" src={shoe} />
        </div>
      </div>
    </div>
  );
};

export default Header;
