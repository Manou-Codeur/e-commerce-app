import React from "react";

import HistoryContext from "./../../../context/historyContext";
import ProductPresentation from "./product-presentation/product-presentation";
import ReviewComp from "./review-comp/review-comp";
import Recommend from "../../reuseable/recommend/recommend";

import { fetchRecommendations } from "../../../server/fake-db/db-functions";
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

  const getCurrProductName = () => {
    //check if the curr url has the "name" param
    if (productDetails.color) {
      return productDetails.name;
    }
    return productDetails.type;
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        productId: productInfo.split("@")[productInfo.split("@").length - 1],
      }}
    >
      <div className="product-page">
        <div className="product-page__main">
          <ProductPresentation productDetails={productDetails} />
          <ReviewComp />
          <Recommend
            headingTitle="You May Like Also"
            productList={fetchRecommendations(getCurrProductName())}
          />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default ProdcutPage;
