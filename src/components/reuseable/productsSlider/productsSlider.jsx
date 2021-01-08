import React, { useState, useRef } from "react";

import Product from "./product/product";

import { ReactComponent as LeftArrow } from "../../../assets/img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/img/right-arrow.svg";
import "./productsSlider.scss";

const ProductsSlider = ({ productsList }) => {
  const containner = useRef();

  const goRight = () => {
    const recommend = document.querySelector(".recommend");
    const body = document.body;
    const amount = containner.current.clientWidth - recommend.clientWidth;

    if (body.clientWidth >= 740) {
      containner.current.style.left = `-${amount}px`;
    } else if (body.clientWidth < 740 && body.clientWidth >= 495) {
      const demiAmount = amount / 2;
      if (
        parseFloat(containner.current.style.left.split("px")[0]) !== -amount
      ) {
        containner.current.style.left = `${
          containner.current.style.left.split("px")[0] - demiAmount
        }px`;
      }
    } else {
      const demiAmount = amount / 5;
      if (parseInt(containner.current.style.left.split("px")[0]) !== -amount) {
        containner.current.style.left = `${
          containner.current.style.left.split("px")[0] - demiAmount
        }px`;
      }
    }
  };

  const goLeft = () => {
    containner.current.style.left = "0";
  };

  return (
    <div className="products-slider">
      <div className="products-slider__left-control" onClick={goLeft}>
        <LeftArrow />
      </div>
      <div className="products-slider__right-control" onClick={goRight}>
        <RightArrow />
      </div>

      <div className="products-slider__containner" ref={containner}>
        {productsList.map(product => (
          <Product key={product.name} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
