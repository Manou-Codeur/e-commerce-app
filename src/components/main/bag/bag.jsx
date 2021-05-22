import React from "react";
import { useSelector } from "react-redux";

import HistoryContext from "../../../context/historyContext";
import ProductsWrapper from "./productsWrapper/productsWrapper";
import BagSummary from "./bagSummary/bagSummary";

import {
  fetchCardProducts,
  getTotalPrice,
} from "./../../../server/fake-db/db-functions";

import "./bag.scss";

const Bag = ({ history }) => {
  //redux
  const cardProducts = useSelector(state => state.products);

  const fetchedProducts = fetchCardProducts(cardProducts);

  return (
    <HistoryContext.Provider value={{ history }}>
      <div className="bag">
        <div className="bag__main">
          <ProductsWrapper fetchedProducts={fetchedProducts} />
          <BagSummary totalPrice={getTotalPrice(cardProducts)} />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default Bag;
