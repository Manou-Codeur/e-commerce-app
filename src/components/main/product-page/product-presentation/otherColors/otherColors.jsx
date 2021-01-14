import React from "react";

import "./otherColors.scss";

const OtherColors = ({ data, selectColor }) => {
  return (
    <div className="other-colors">
      {data.map(item => (
        <div
          className="other-colors__item"
          key={item.color}
          onClick={() => selectColor(item.color)}
        >
          <img src={item.images[0]} alt="product" />
        </div>
      ))}
    </div>
  );
};

export default OtherColors;
