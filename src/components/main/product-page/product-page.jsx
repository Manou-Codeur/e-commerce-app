import React from "react";

import { fetchProduct } from "../../../server/fake-db/db-functions";

import "./product-page.scss";

const ProdcutPage = ({
  match: {
    params: { productInfo },
  },
}) => {
  const product = {
    type: productInfo.split("@")[0],
    genre: productInfo.split("@")[1],
    name: productInfo.split("@")[2],
    color: productInfo.split("@")[3],
  };

  console.log(
    fetchProduct(product.type, product.genre, product.name, product.color)
  );

  return (
    <div className="product-page">
      <h1>Product: </h1>
    </div>
  );
};

export default ProdcutPage;
