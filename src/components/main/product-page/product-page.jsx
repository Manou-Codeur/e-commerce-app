import { useSelector } from "react-redux";

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
  const userAuthed = useSelector(({ authReducer }) => authReducer.uid);

  const productDetails = {
    name: productInfo.split("@")[0],
    id: productInfo.split("@")[1],
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
      }}
    >
      <div className="product-page">
        <div className="product-page__main">
          <ProductPresentation
            productId={productDetails.id}
            userAuthed={userAuthed}
          />
          <ReviewComp userAuthed={userAuthed} productId={productDetails.id} />
          <Recommend
            headingTitle="You May Like Also"
            productList={fetchRecommendations(productDetails.name)}
          />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default ProdcutPage;
