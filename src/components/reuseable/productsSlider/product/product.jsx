import React, { useContext } from "react";

import HistoryContext from "./../../../../context/historyContext";

import "./product.scss";

const Product = ({ data }) => {
  const { history } = useContext(HistoryContext);

  return (
    <div
      className="product"
      onClick={() => history.push(`/product/${data.name}`)}
    >
      <div className="product__img-wrapper">
        <img src={data.imgUrl} alt="shoes img" />
      </div>

      <div className="product__info">
        <span className="product__name">{data.name}</span>
        <span className="product__price">24.99 $</span>
      </div>
    </div>
  );
};

export default Product;
