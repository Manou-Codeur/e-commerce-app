import React from "react";

import Order from "./order/order";

import "./orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <h2>Your Orders</h2>

      <div className="orders__wrapper">
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
};

export default Orders;
