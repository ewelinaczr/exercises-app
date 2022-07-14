import React, { Fragment, useContext } from "react";
import styles from "./ExercisesPreview.module.scss";
import ExercisePreviewCard from "./ExercisePreviewCard";
import { BiDumbbell } from "react-icons/bi";
import SearchContext from "../context/searchContext";

export default function ExercisesPreview() {
  const { exercises, category } = useContext(SearchContext);
  // console.log(exercises);
  return (
    <Fragment>
      <div className={styles.category_name}>
        <div className={styles.category_desc}>
          <div className={styles.category_desc_text}>
            <BiDumbbell className={styles.icon} />
            <h2>category</h2>
          </div>
          <div className={styles.category_desc_text}>
            {category !== undefined ? (
              <h1>{exercises[0].bodyPart}</h1>
            ) : (
              <h1>Exercises</h1>
            )}
          </div>
        </div>
        <p>
          <span style={{ fontWeight: 700 }}>{exercises.length}</span> exercises
        </p>
      </div>

      <div className={styles.grid}>
        {exercises.map((el, index) => (
          <ExercisePreviewCard key={index} exercise={el} />
        ))}
      </div>
    </Fragment>
  );
}
