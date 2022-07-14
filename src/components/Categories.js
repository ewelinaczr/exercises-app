import React, { useContext } from "react";
import { Fragment } from "react";
// STYLES
import styles from "./Categories.module.scss";
// COMPONNETS
import SingleCategory from "./SingleCategory";
// CONTEXT
import CategoryContext from "../context/categoryContext";

export default function Categories() {
  const { categories } = useContext(CategoryContext);
  return (
    <Fragment>
      <div className={styles.box}>
        {categories.map((el) => (
          <SingleCategory key={el.id || el} el={el} />
        ))}
      </div>
    </Fragment>
  );
}
