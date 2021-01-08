import React, { useState, useRef } from "react";

import Product from "./product/product";

import { ReactComponent as LeftArrow } from "../../../assets/img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/img/right-arrow.svg";
import "./productsSlider.scss";

const ProductsSlider = ({ productsList }) => {
  const containner = useRef();

  const goRight = () => {
    const recommendComponent = document.querySelector(".recommend");
    const body = document.body;
    const scrollAmount =
      containner.current.clientWidth - recommendComponent.clientWidth;
    const currPosition = parseFloat(
      containner.current.style.left.split("px")[0]
    );

    if (body.clientWidth >= 740) {
      containner.current.style.left = `-${scrollAmount}px`;
    } else if (body.clientWidth < 740 && body.clientWidth >= 495) {
      const halfScrollAmount = scrollAmount / 2;
      if (currPosition !== -scrollAmount) {
        containner.current.style.left = `${currPosition - halfScrollAmount}px`;
      }
    } else {
      const FifthScrollAmount = scrollAmount / 5;
      if (currPosition !== -scrollAmount) {
        containner.current.style.left = `${currPosition - FifthScrollAmount}px`;
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
