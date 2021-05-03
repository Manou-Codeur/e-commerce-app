import React from "react";

import "./order.scss";

const Order = ({ data }) => {
  const generatePrice = () => {
    const price = data.price;

    if (data.amount > 1) {
      return `(${data.amount}) * ${data.price}.00`;
    }
    return `${data.price}.00`;
  };

  return (
    <div className="order">
      <div className="order__img">
        <img src={data.img} alt="" />
      </div>

      <div className="order__info">
        <div className="order__date">May 31,2020</div>
        <div className="order__state">
          <span>Shipped</span>
          <span>{generatePrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
