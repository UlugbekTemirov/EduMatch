import * as React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <label htmlFor="search">
        <BsSearch />
      </label>
      <input id="search" type="search" />
    </div>
  );
};

export default Search;
