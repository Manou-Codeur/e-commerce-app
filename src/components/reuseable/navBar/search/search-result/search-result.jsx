import React, { useContext } from "react";

import HistoryContext from "./../../../../../context/historyContext";

import "./search-result.scss";

const SearchResult = ({ filtredProducts }) => {
  const { history } = useContext(HistoryContext);

  const goToProductPage = ({ target }) => {
    if (target.nodeName === "P") {
      history.push(`/product/${target.textContent}`);
    }
  };

  return (
    <div className="search-result" onClick={goToProductPage}>
      <span>
        {filtredProducts.length === 0 ? "Popular searches" : "Best suggestion"}
      </span>
      {filtredProducts.length > 0 ? (
        filtredProducts
          .slice(0, 4)
          .map(product => <p key={product.id}>{product.name}</p>)
      ) : (
        <React.Fragment>
          <p>Air Jordan Elevation</p>
          <p>Air Force 1</p>
          <p>Adidas UQT</p>
          <p>Nike Zoom X</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchResult;
