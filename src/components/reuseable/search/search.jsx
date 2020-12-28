import React, { useRef } from "react";

import SearchInput from "./search-input/search-input";
import SearchResult from "./search-result/search-result";

import "./search.scss";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as Close } from "../../../assets/img/close.svg";

const Search = ({ changeSearchState }) => {
  const searchBackground = useRef("");
  const search = useRef("");

  const closeSearch = () => {
    searchBackground.current.style.animation = "back-search-out 1s";
    search.current.style.animation = "search-out 1s";
    setTimeout(changeSearchState, 800);
  };

  return (
    <div className="search--background" ref={searchBackground}>
      <div className="search" ref={search}>
        <div className="search__up-part">
          <img src={Logo} className="search__logo" />

          <SearchInput />

          <div className="search__close-containner">
            <Close
              fill="black"
              className="search__close-icon"
              onClick={closeSearch}
            />
          </div>
        </div>

        <div className="search__down-part">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default Search;
