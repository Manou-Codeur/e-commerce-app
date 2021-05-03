import React, { useContext, useState, useEffect } from "react";

import OrdersWrapper from "./ordersWrapper/ordersWrapper";
import FirebaseContext from "./../../../../server/firebase/firebaseContext";

import { fetchCardProducts } from "./../../../../server/fake-db/db-functions";
import "./orders.scss";

const Orders = ({ uid }) => {
  const { firebase } = useContext(FirebaseContext);
  const [buyedProducts, setBuyedProducts] = useState(null);
  const [errors, setErrors] = useState(false);

  const fetchBuyedProducts = async () => {
    const products = await firebase.getBuyedProducts(uid);
    products.once("value", snapshot => {
      //test if there's any product
      if (Array.isArray(snapshot.val())) {
        const fetchedProducts = fetchCardProducts(snapshot.val());
        setBuyedProducts(fetchedProducts);
      } else setBuyedProducts([]);
    });
  };

  useEffect(() => {
    fetchBuyedProducts();

    return () => firebase.getBuyedProducts(uid).off();
  });

  useEffect(() => {
    //handle unexpected errors; if the user is still seeying the "loading" msg for 10 sec
    const timer = setTimeout(() => {
      if (!buyedProducts) {
        setErrors(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="orders">
      <h2>Your Orders</h2>

      <OrdersWrapper products={buyedProducts} errors={errors} />
    </div>
  );
};

export default Orders;
