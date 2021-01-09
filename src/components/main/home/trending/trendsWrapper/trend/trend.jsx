import React from "react";

import "./trend.scss";

const Trend = ({ imgUrl, big }) => {
  return (
    <div className={big ? "trend--big" : "trend"}>
      <div className={big ? "trend--big__img-wrapper" : "trend__img-wrapper"}>
        <img src={imgUrl} alt="shoe image" />
      </div>

      <div className={big ? "trend--big__name" : "trend__name"}>
        Nike Zoom X
      </div>
    </div>
  );
};

export default Trend;
