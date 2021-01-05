import React from "react";

import "./product.scss";

const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="product__img-wrapper">
        <img src={data.color} alt="" />
      </div>

      <div className="product__info">
        <span className="product__name">{data.name}</span>
        <span className="product__price">24.99 $</span>
      </div>
    </div>
  );
};

export default Product;
