import React from "react";
import { Link } from "react-router-dom";

import "./search-result.scss";

const SearchResult = ({ filtredProducts, closeSearch }) => {
  return (
    <div className="search-result" onClick={() => closeSearch()}>
      <span>
        {filtredProducts.length === 0 ? "Popular searches" : "Best suggestion"}
      </span>
      {filtredProducts.length > 0 ? (
        filtredProducts.slice(0, 4).map(product => (
          <Link
            key={product.id}
            id={product.id}
            to={`/product/${product.name}@${product.id}`}
          >
            {product.name}
          </Link>
        ))
      ) : (
        <React.Fragment>
          <Link id="1" to="/product/Air Jordan Elevation@1">
            Air Jordan Elevation
          </Link>
          <Link id="9" to="/product/Air Force 1@9">
            Air Force 1
          </Link>
          <Link id="5" to="/product/Adidas NMD@5">
            Adidas NMD
          </Link>
          <Link id="3" to="/product/Nike Zoom X@3">
            Nike Zoom X
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchResult;
