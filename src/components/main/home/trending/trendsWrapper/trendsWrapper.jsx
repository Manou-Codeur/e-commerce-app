import React from "react";

import Trend from "./trend/trend";

import "./trendsWrapper.scss";
import nike from "../../../../../assets/img/trending-products/jordan2.jpg";
import LacosteSneakers from "../../../../../assets/img/trending-products/lacoste.jpg";
import NikeZoom from "../../../../../assets/img/trending-products/nikeZoom.jpg";

const TrendsWrapper = () => {
  return (
    <div className="trends-wrapper">
      <div className="trends-wrapper__big">
        <Trend
          data={{ imgUrl: nike, name: "Nike React Infinity Run Flyknit 2" }}
          big={true}
        />
      </div>

      <div className="trends-wrapper__small">
        <Trend
          data={{ imgUrl: LacosteSneakers, name: "Lacoste Sneakers Run" }}
        />
        <Trend data={{ imgUrl: NikeZoom, name: "Nike Zoom X" }} />
      </div>
    </div>
  );
};

export default TrendsWrapper;
