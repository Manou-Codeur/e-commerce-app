import React from "react";

import Product from "./product/product";

import "./productsWrapper.scss";

const ProductsWrapper = () => {
  return (
    <div className="product-wrapper">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductsWrapper;
