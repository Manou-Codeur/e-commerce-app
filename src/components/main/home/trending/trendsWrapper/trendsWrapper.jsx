import React from "react";

import Trend from "./trend/trend";

import "./trendsWrapper.scss";
import AirJordanXI from "../../../../../assets/img/trending-products/jordan2.jpg";
import Lacoste from "../../../../../assets/img/trending-products/lacoste.jpg";
import NikeZoom from "../../../../../assets/img/trending-products/nikeZoom.jpg";

const TrendsWrapper = () => {
  return (
    <div className="trends-wrapper">
      <div className="trends-wrapper__big">
        <Trend imgUrl={AirJordanXI} big={true} />
      </div>

      <div className="trends-wrapper__small">
        <Trend imgUrl={Lacoste} />
        <Trend imgUrl={NikeZoom} />
      </div>
    </div>
  );
};

export default TrendsWrapper;
