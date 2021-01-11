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
            type: "shoes",
            genre: "women",
            imgUrl: NikeInfinity,
            name: "Nike React Infinity Run Flyknit 2",
            color: "pink",
          }}
          big={true}
        />
      </div>

      <div className="trends-wrapper__small">
        <Trend
          data={{
            type: "shoes",
            genre: "men",
            imgUrl: LacosteSneakers,
            name: "Sneakers Run Breaker",
            color: "white",
          }}
        />
        <Trend
          data={{
            type: "shoes",
            genre: "men",
            imgUrl: NikeZoom,
            name: "Nike Zoom X",
            color: "orange",
          }}
        />
      </div>
    </div>
  );
};

export default TrendsWrapper;
