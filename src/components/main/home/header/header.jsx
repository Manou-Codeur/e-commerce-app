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
        </div>
      </div>

      <div className="header__right-part">
        <div className="header__presentation-text">
          <h1 className="header__shoe-name-1" style={{ color: "#3867D6" }}>
            AIR
          </h1>
          <h1 className="header__shoe-name-2">JORDAN</h1>
          <span
            className="header__shoe-extra-name"
            style={{ color: "#3867D6" }}
          >
            REACT ELEVATION
          </span>
        </div>

        <img className="header__shoe-img" src={shoe} />
      </div>
    </div>
  );
};

export default Header;
