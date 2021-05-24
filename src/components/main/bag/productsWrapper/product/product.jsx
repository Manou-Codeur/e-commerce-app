import React from "react";
import { useDispatch } from "react-redux";

import AmountSelect from "./selectAmount/selectAmount";

import { removeFromCard } from "./../../../../../store/card";
import "./product.scss";

const Product = ({ data }) => {
  const dispatch = useDispatch();

  //local storage data
  let allProducts = JSON.parse(localStorage.getItem("products"));
  const productIndex = allProducts.findIndex(
    product => parseInt(product.pid) === data.pid
  );

  const handleOnRemove = () => {
    //redux
    dispatch(removeFromCard({ pid: data.pid }));

    //local storage mutating
    allProducts.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(allProducts));
  };

  return (
    <div className="bag-product">
      <div className="bag-product__img">
        <img src={data.img} alt="product" />
      </div>

      <div className="bag-product__info">
        <span className="bag-product__name">{data.name}</span>
        <span className="bag-product__genre">{`${data.genre}'s ${data.type}`}</span>
        <div className="bag-product__amountAndPrice">
          <AmountSelect
            pid={data.pid}
            amount={data.amount}
            allProducts={allProducts}
            productIndex={productIndex}
          />
          <span className="price">{data.price}</span>
        </div>
        <button className="bag-product__remove-btn" onClick={handleOnRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
