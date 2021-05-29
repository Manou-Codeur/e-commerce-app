import React from "react";

import "./images-wrapper.scss";

const ImagesWrapper = ({ images }) => {
  return (
    <div className="images-wrapper" key={new Date().getMilliseconds()}>
      <div className="images-wrapper__left">
        {images.slice(0, 2).map(image => (
          <div className="images-wrapper__item" key={image}>
            <img src={image} alt="Another color" />
          </div>
        ))}
      </div>

      <div className="images-wrapper__right">
        {images.slice(2).map(image => (
          <div className="images-wrapper__item" key={image}>
            <img src={image} alt="Another color" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesWrapper;
