import React, { useRef, useEffect } from "react";

import Product from "./product/product";

import { ReactComponent as LeftArrow } from "../../../../assets/img/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../../assets/img/right-arrow.svg";
import "./productsSlider.scss";

const ProductsSlider = ({ productsList }) => {
  const containner = useRef();
  const leftCursor = useRef();
  const rightCursor = useRef();

  useEffect(() => {
    //init the left property of the containner to 0
    containner.current.style.left = 0;
    containner.current.style.width = `${productsList.length * 27}em`;
  });

  const goRight = () => {
    const recommendComponent = document.querySelector(".recommend");
    const body = document.body;
    let scrollAmount =
      containner.current.clientWidth - recommendComponent.clientWidth;
    let currPosition =
      containner.current.style.left.split("px")[0] !== ""
        ? parseFloat(containner.current.style.left.split("px")[0])
        : 0;

    if (body.clientWidth >= 740) {
      containner.current.style.left = `-${scrollAmount}px`;
    } else if (body.clientWidth < 740 && body.clientWidth >= 495) {
      const halfScrollAmount = scrollAmount / 2;
      if (currPosition !== -scrollAmount) {
        containner.current.style.left = `${currPosition - halfScrollAmount}px`;
      }
    } else if (body.clientWidth < 495) {
      const FifthScrollAmount = scrollAmount / 5;
      if (currPosition !== -scrollAmount) {
        containner.current.style.left = `${currPosition - FifthScrollAmount}px`;
      }
    }

    //about cursors disabilty
    scrollAmount =
      containner.current.clientWidth - recommendComponent.clientWidth;
    currPosition =
      containner.current.style.left.split("px")[0] !== ""
        ? parseFloat(containner.current.style.left.split("px")[0])
        : 0;
    leftCursor.current.className = "products-slider__left-control";
    if (currPosition === -scrollAmount) {
      rightCursor.current.className +=
        " products-slider__right-control--disable";
    }
  };

  const goLeft = () => {
    containner.current.style.left = "0";
    leftCursor.current.className += " products-slider__left-control--disable";
    rightCursor.current.className = "products-slider__right-control";
  };

  return (
    <div className="products-slider">
      <div
        className="products-slider__left-control products-slider__left-control--disable"
        onClick={goLeft}
        ref={leftCursor}
      >
        <LeftArrow />
      </div>
      <div
        className="products-slider__right-control"
        onClick={goRight}
        ref={rightCursor}
      >
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
