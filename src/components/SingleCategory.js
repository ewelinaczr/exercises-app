import React from "react";
import { Fragment, useState, useContext } from "react";
// STYLES
import styles from "./SingleCategory.module.scss";
// ICONS
import { BiDumbbell } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
// CONTEXT
import SearchContext from "../context/searchContext";

const imgSrc =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

function SingleCategory({ el }) {
  const { setCategory, exercises, category } = useContext(SearchContext);

  console.log(category);
  const catEl = exercises.filter((el) => el.bodyPart === "waist");
  console.log(catEl);

  return (
    <Fragment>
      <div className={styles.box}>
        <img className={styles.image} src={imgSrc} alt="gym exercises" />
        <div className={styles.text}>
          <div className={styles.exercises_no}>
            <BiDumbbell />
            <p>21</p>
          </div>
          <p className={styles.category}>{el.toUpperCase()}</p>
        </div>
        <div
          className={styles.play}
          onClick={() => {
            setCategory(el);
            console.log(el);
            window.scrollTo({
              top: "1800px",
              lext: "10px",
              behavior: "smooth",
            });
          }}
        >
          <BsPlayFill className={styles.play_icon} size={40} />
        </div>
      </div>
    </Fragment>
  );
}

export default SingleCategory;
