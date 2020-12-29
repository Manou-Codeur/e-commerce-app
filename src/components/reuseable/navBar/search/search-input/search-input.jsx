import React, { useRef } from "react";

import { ReactComponent as SearchIcon } from "../../../../../assets/img/search.svg";
import { ReactComponent as Close } from "../../../../../assets/img/close.svg";
import "./search-input.scss";

const SearchInput = ({ onchange }) => {
  const InputRef = useRef("");

  const clearInput = () => {
    InputRef.current.value = "";
  };

  return (
    <div className="search-input">
      <SearchIcon className="search-input__search-icon" fill="black" />

      <input
        type="text"
        placeholder="Type something..."
        ref={InputRef}
        onChange={onchange}
      />

      <Close
        className="search-input__close-icon"
        fill="black"
        onClick={clearInput}
      />
    </div>
  );
};

export default SearchInput;
