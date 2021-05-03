import React from "react";

import Order from "./order/order";

const OrdersWrapper = ({ products, errors }) => {
  if (errors)
    return <span>There's is an unexpected error, please reload the page!</span>;
  if (!products) return <span>Loading products...</span>;
  return (
    <div className="orders__wrapper">
      {products.length === 0 ? (
        <span style={{ marginTop: "1em" }}>
          You have not purchased any product yet!
        </span>
      ) : (
        products.map(product => <Order data={product} key={product.img} />)
      )}
    </div>
  );
};

export default OrdersWrapper;
