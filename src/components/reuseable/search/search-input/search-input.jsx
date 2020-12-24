import React from "react";

import { ReactComponent as SearchIcon } from "../../../../assets/img/search.svg";
import { ReactComponent as Close } from "../../../../assets/img/close.svg";
import "./search-input.scss";

const SearchInput = () => {
  return (
    <div className="search-input">
      <SearchIcon className="search-input__search-icon" fill="black" />

      <input type="text" placeholder="Type something..." />

      <Close className="search-input__close-icon" fill="black" />
    </div>
  );
};

export default SearchInput;
