import React from "react";

import Product from "./product/product";

import "./productsWrapper.scss";

const ProductsWrapper = ({ fetchedProducts }) => {
  return (
    <div className="product-wrapper">
      {fetchedProducts.length > 0 ? (
        fetchedProducts.map(product => (
          <Product data={product} key={product.img} />
        ))
      ) : (
        <h1>There's no products in you bag!</h1>
      )}
    </div>
  );
};

export default ProductsWrapper;
