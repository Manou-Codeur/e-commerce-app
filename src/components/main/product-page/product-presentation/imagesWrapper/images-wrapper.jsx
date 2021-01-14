import React from "react";
import { motion } from "framer-motion";

import "./images-wrapper.scss";

const ImagesWrapper = ({ images }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="images-wrapper"
      key={new Date().getMilliseconds()}
    >
      <div className="images-wrapper__left">
        {images.slice(0, 2).map(image => (
          <div className="images-wrapper__item" key={image}>
            <img src={image} alt="product" />
          </div>
        ))}
      </div>

      <div className="images-wrapper__right">
        {images.slice(2).map(image => (
          <div className="images-wrapper__item" key={image}>
            <img src={image} alt="product" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImagesWrapper;
