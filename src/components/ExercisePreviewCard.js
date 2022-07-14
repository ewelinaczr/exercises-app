import React from "react";
import styles from "./ExercisePreviewCard.module.scss";
import { Link } from "react-router-dom";
import { BiDumbbell } from "react-icons/bi";

export default function ExercisePreviewCard({ exercise }) {
  return (
    <div className={styles.box}>
      <div>
        <div>
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
            className={styles.graphic}
          />
        </div>
        <div className={styles.labels}>
          <div className={styles.label_target}>{exercise.target}</div>
          <div className={styles.label_bodypart}>{exercise.bodyPart}</div>
          <Link to={`/exercise/${exercise.id}`}>
            <div className={styles.label_play}> play</div>
          </Link>
        </div>
      </div>
      <div className={styles.description}>
        <BiDumbbell className={styles.icon} />
        <h2>{exercise.name}</h2>
      </div>
    </div>
  );
}
