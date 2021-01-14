import React from "react";

import "./otherColors.scss";

const OtherColors = ({ images }) => {
  return (
    <div className="other-colors">
      {images.map(image => (
        <div className="other-colors__item" key={image}>
          <img src={image} alt="product" />
        </div>
      ))}
    </div>
  );
};

export default OtherColors;
