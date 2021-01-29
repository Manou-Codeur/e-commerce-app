import React from "react";

import ProductsSlider from "./productsSlider/productsSlider";

import "./recommend.scss";

const Recommend = ({ headingTitle, productList }) => {
  return (
    <div className="recommend">
      <h2 className="recommend__heading">{headingTitle}</h2>
      <ProductsSlider productsList={productList} />
    </div>
  );
};

export default Recommend;
