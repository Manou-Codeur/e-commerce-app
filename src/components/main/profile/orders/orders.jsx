import React, { useContext, useState, useEffect } from "react";

import Order from "./order/order";
import FirebaseContext from "./../../../../server/firebase/firebaseContext";

import { fetchCardProducts } from "./../../../../server/fake-db/db-functions";
import "./orders.scss";

const Orders = ({ uid }) => {
  const { firebase } = useContext(FirebaseContext);
  const [buyedProducts, setBuyedProducts] = useState([]);

  const fetchBuyedProducts = async () => {
    const products = await firebase.getBuyedProducts(uid);
    products.once("value", snapshot => {
      //test if there's any product
      if (Array.isArray(snapshot.val())) {
        const fetchedProducts = fetchCardProducts(snapshot.val());
        setBuyedProducts(fetchedProducts);
      } else setBuyedProducts(null);
    });
  };

  useEffect(() => {
    fetchBuyedProducts();

    return () => firebase.getBuyedProducts(uid).off();
  });

  return (
    <div className="orders">
      <h2>Your Orders</h2>

      <div className="orders__wrapper">
        {buyedProducts && buyedProducts.length === 0 && (
          <span>Loading products...</span>
        )}

        {!buyedProducts && (
          <span style={{ marginTop: "1em" }}>
            You have not purchased any product yet!
          </span>
        )}

        {buyedProducts &&
          buyedProducts.length > 0 &&
          buyedProducts.map(product => (
            <Order key={product.img} data={product} />
          ))}
      </div>
    </div>
  );
};

export default Orders;
