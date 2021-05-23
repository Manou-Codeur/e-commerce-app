import React from "react";

import Trend from "./trend/trend";

import "./trendsWrapper.scss";
import NikeInfinity from "../../../../../assets/img/trending-products/nikeInfinity.jpg";
import LacosteSneakers from "../../../../../assets/img/trending-products/lacoste.jpg";
import NikeZoom from "../../../../../assets/img/trending-products/nikeZoom.jpg";

const TrendsWrapper = () => {
  return (
    <div className="trends-wrapper">
      <div className="trends-wrapper__big">
        <Trend
          data={{
            imgUrl: NikeInfinity,
            name: "Nike React Infinity Run Flyknit 2",
            id: 6,
          }}
          big={true}
        />
      </div>

      <div className="trends-wrapper__small">
        <Trend
          data={{
            imgUrl: LacosteSneakers,
            name: "Sneakers Run Breaker",
            id: 2,
          }}
        />
        <Trend
          data={{
            imgUrl: NikeZoom,
            name: "Nike Zoom X",
            id: 3,
          }}
        />
      </div>
    </div>
  );
};

export default TrendsWrapper;
