import React from "react";
import { AnimatePresence } from "framer-motion";

import Order from "./order/order";

const OrdersWrapper = ({ products, errors }) => {
  if (errors)
    return <span>There's is an unexpected error, please reload the page!</span>;
  if (!products) return <span>Loading products...</span>;
  return (
    <div className="orders__wrapper">
      {products.length === 0 ? (
        <span>You have not purchased any product yet!</span>
      ) : (
        products.map(product => (
          <AnimatePresence>
            <Order data={product} key={product.img} />
          </AnimatePresence>
        ))
      )}
    </div>
  );
};

export default OrdersWrapper;
