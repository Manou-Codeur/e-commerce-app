import React from "react";

import "./order.scss";

const Order = () => {
  return (
    <div className="order">
      <div className="order__img">
        <img
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-9dea31af-bc80-421a-8721-8cc1d7bce9b2/haut-court-jordan-moto-pour-VjvdRq.jpg"
          alt=""
        />
      </div>

      <div className="order__info">
        <div className="order__date">May 31,2020</div>
        <div className="order__state">
          <span>Shipped</span>
          <span>$ 120.00</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
