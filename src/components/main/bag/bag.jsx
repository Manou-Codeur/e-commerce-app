import React from "react";

import HistoryContext from "../../../context/historyContext";
import ProductsWrapper from "./productsWrapper/productsWrapper";
import BagSummary from "./bagSummary/bagSummary";

import "./bag.scss";

const Bag = ({ history }) => {
  return (
    <HistoryContext.Provider value={{ history }}>
      <div className="bag">
        <div className="bag__main">
          <ProductsWrapper />
          <BagSummary />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default Bag;
