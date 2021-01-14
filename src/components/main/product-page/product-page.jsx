import React from "react";

import NavBar from "./../../reuseable/navBar/navBar";
import ProductPresentation from "./product-presentation/product-presentation";
import HistoryContext from "./../../../context/historyContext";

import "./product-page.scss";

const ProdcutPage = ({
  match: {
    params: { productInfo },
  },
  history,
}) => {
  const productDetails = {
    type: productInfo.split("@")[0],
    genre: productInfo.split("@")[1],
    name: productInfo.split("@")[2],
    color: productInfo.split("@")[3],
  };

  return (
    <HistoryContext.Provider value={{ history }}>
      <div className="product-page">
        <NavBar />
        <ProductPresentation productDetails={productDetails} />
        {/* reviwe component */}
        {/* slider component*/}
      </div>
    </HistoryContext.Provider>
  );
};

export default ProdcutPage;
