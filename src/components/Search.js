import React from "react";
import { Fragment, useState, useContext } from "react";
// STYLES
import styles from "./Search.module.scss";
// ICONES
import { BsSearch } from "react-icons/bs";
// CONTEXT
import SearchContext from "../context/searchContext";

function Search() {
  const { handleSearch, setSearch, search } = useContext(SearchContext);

  return (
    <Fragment>
      <div className={styles.ex_box}>
        <p>Search by exercise name, type or target</p>
        <div className={styles.box}>
          <input
            type="text"
            placeholder="Search exercises"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLocaleLowerCase());
            }}
          ></input>
          <button type="submit" onClick={handleSearch}>
            <div className={styles.button_box}>
              <BsSearch className={styles.icon} />
              Search
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
