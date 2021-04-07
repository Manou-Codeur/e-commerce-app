import React, { useEffect, useState } from "react";
import jwtGenerator from "jwt-decode";

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
  const [authed, setAuthed] = useState(null);

  useEffect(() => {
    try {
      const jwt = jwtGenerator(JSON.parse(localStorage.getItem("user-authed")));
      setAuthed(jwt.user_id);
    } catch (error) {}
  });

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
          <ProductPresentation
            productDetails={productDetails}
            userAuthed={authed}
          />
          <ReviewComp userAuthed={authed} />
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
