import React, { useState } from "react";
import { motion } from "framer-motion";

import SearchInput from "./search-input/search-input";
import SearchResult from "./search-result/search-result";

import { filterProducts } from "../../../../server/fake-db/db-functions";
import "./search.scss";
import Logo from "../../../../assets/img/logo.png";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";

const Search = ({ closeSearch }) => {
  const [filtredProducts, setFiltredProducts] = useState([]);

  const onQueryChange = ({ target }) => {
    setFiltredProducts(filterProducts(target.value));
  };

  return (
    <motion.div
      className="search--background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="search"
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8 }}
        exit={{ y: "-100%" }}
      >
        <div className="search__up-part">
          <img src={Logo} className="search__logo" />

          <SearchInput onchange={onQueryChange} />

          <div className="search__close-containner">
            <Close
              fill="black"
              className="search__close-icon"
              onClick={closeSearch}
            />
          </div>
        </div>

        <div className="search__down-part">
          <SearchResult filtredProducts={filtredProducts} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Search;
