import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import SearchInput from "./search-input/search-input";
import SearchResult from "./search-result/search-result";

import { filterProducts } from "../../../server/fake-db.js/db-functions";
import "./search.scss";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as Close } from "../../../assets/img/close.svg";

const Search = ({ changeSearchState }) => {
  const [filtredProducts, setFiltredProducts] = useState([]);

  const searchBackground = useRef("");
  const search = useRef("");

  const closeSearch = () => {
    searchBackground.current.style.animation = "back-search-out 1s";
    search.current.style.animation = "search-out 1s";
    setTimeout(changeSearchState, 800);
  };

  const onQueryChange = ({ target }) => {
    setFiltredProducts(filterProducts(target.value));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="search--background"
      ref={searchBackground}
    >
      <motion.div
        className="search"
        ref={search}
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
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
