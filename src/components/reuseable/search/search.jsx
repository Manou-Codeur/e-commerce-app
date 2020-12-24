import React from "react";

import SearchInput from "./search-input/search-input";
import SearchResult from "./search-result/search-result";

import "./search.scss";
import Logo from "../../../assets/img/logo.png";
import { ReactComponent as Close } from "../../../assets/img/close.svg";

const Search = () => {
  return (
    <div className="search--background">
      <div className="search">
        <img src={Logo} className="search__logo" />

        <div className="search__core">
          <SearchInput />
          <SearchResult />
        </div>

        <div className="search__close-containner">
          <Close fill="black" className="search__close-icon" />
        </div>
      </div>
    </div>
  );
};

export default Search;
