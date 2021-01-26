import React from "react";

import HistoryContext from "./../../../context/historyContext";
import NavBar from "./../../reuseable/navBar/navBar";
import ProductPresentation from "./product-presentation/product-presentation";
import ReviewComp from "./review-comp/review-comp";
import Recommend from "../../reuseable/recommend/recommend";

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

        <div className="product-page__main">
          <ProductPresentation productDetails={productDetails} />
          <ReviewComp />
          <Recommend
            headingTitle="You May Like Also"
            currProduct={productDetails.name}
          />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default ProdcutPage;
