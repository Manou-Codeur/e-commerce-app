import React from "react";

import AmountSelect from "./selectAmount/selectAmount";

import "./product.scss";
import Img from "../../../../../assets/img/featured-products/adidas-uqt.png";

const Product = () => {
  return (
    <div className="bag-product">
      <div className="bag-product__img">
        <img src={Img} alt="product" />
      </div>

      <div className="bag-product__info">
        <span className="bag-product__name">Adidas UQT 2020</span>
        <span className="bag-product__genre">Men's Basketball Shoe</span>
        <div className="bag-product__amountAndPrice">
          <AmountSelect />
          <span className="price">$ 150.45</span>
        </div>
        <button className="bag-product__remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default Product;
