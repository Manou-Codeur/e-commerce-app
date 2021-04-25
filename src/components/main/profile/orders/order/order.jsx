import React from "react";

import "./order.scss";

const Order = ({ data }) => {
  return (
    <div className="order">
      <div className="order__img">
        <img src={data.img} alt="" />
      </div>

      <div className="order__info">
        <div className="order__date">May 31,2020</div>
        <div className="order__state">
          <span>Shipped</span>
          <span>{`${data.price}.00`}</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
