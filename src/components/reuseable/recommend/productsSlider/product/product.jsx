import React, { useContext } from "react";

import HistoryContext from "./../../../../../context/historyContext";

import "./product.scss";

const Product = ({ data: { name, type, genre, mainColor, colors } }) => {
  const { history } = useContext(HistoryContext);

  const goToProductPage = () => {
    history.push(`/product/${type}@${genre}@${name}@${mainColor}`);
    //this is when we are already in the "product" router we need to scroll the page to the top automatically
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="product" onClick={goToProductPage}>
      <div className="product__img-wrapper">
        <img src={colors[mainColor][0]} alt={name} />
      </div>

      <div className="product__info">
        <span className="product__name">{name}</span>
        <span className="product__price">24.99 $</span>
      </div>
    </div>
  );
};

export default Product;
