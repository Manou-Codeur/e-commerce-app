import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="order"
    >
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
    </motion.div>
  );
};

export default Order;
