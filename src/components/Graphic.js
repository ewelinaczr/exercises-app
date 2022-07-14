import React from "react";
// STYLES
import styles from "./Graphic.module.scss";
// ICONS
import { GiBodyBalance } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";

function Graphic() {
  return (
    <div className={styles.box}>
      <div className={styles.descriptions_left}>
        <p>Cardio</p>
        <p>neck</p>
        <p>schoulders</p>
        <p>chest</p>
        <p>back</p>
      </div>
      <div className={styles.icon_background}>
        <GiBodyBalance size={150} className={styles.icon} />
      </div>
      <div className={styles.descriptions_right}>
        <div className={styles.descriptions_icons}>
          <BiDumbbell size={15} className={styles.icon_small} />
          <p>Upper arms</p>
        </div>
        <div className={styles.descriptions_icons}>
          <BiDumbbell size={15} />
          <p>Lower arms</p>
        </div>
        <p>waist</p>
        <p>upper legs</p>
        <p>lower legs</p>
      </div>
    </div>
  );
}

export default Graphic;
