import React from "react";

import Logo from "../../../assets/img/logo.png";
import { ReactComponent as Facebook } from "../../../assets/img/facebook.svg";
import { ReactComponent as Twiter } from "../../../assets/img/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/img/instagram.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <span>TERMS & CONDITION</span>
        <span>POLICY</span>
        <span>MAP</span>
      </div>

      <div className="footer__center">
        <span>
          2020 <em>FASHION</em> All Rights Reserved
        </span>
        <img src={Logo} alt="logo" />
      </div>

      <div className="footer__right">
        <Twiter />
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
};

export default Footer;
