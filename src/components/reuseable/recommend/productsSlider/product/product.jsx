import React, { useContext } from "react";

import HistoryContext from "./../../../../../context/historyContext";

import "./product.scss";

const Product = ({ data: { name, type, genre, imgUrl, color } }) => {
  const { history } = useContext(HistoryContext);

  return (
    <div
      className="product"
      onClick={() => history.push(`/product/${type}@${genre}@${name}@${color}`)}
    >
      <div className="product__img-wrapper">
        <img src={imgUrl} alt="product img" />
      </div>

      <div className="product__info">
        <span className="product__name">{name}</span>
        <span className="product__price">24.99 $</span>
      </div>
    </div>
  );
};

export default Product;
