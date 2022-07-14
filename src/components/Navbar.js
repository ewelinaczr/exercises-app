import React from "react";
import { Link } from "react-router-dom";
// ICONS
import { AiOutlineFire } from "react-icons/ai";
// STYLES
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.box}>
      <Link to="/" className={styles.logo_box}>
        <AiOutlineFire size={30} className={styles.logo_icon} />
        <p className={styles.logo_name}>
          <span>F</span>ire <span>F</span>itness
        </p>
      </Link>
      <div>
        <Link to="/" className={styles.links}>
          Home
        </Link>
        <a href="#exercises" className={styles.links}>
          Exercises
        </a>
      </div>
    </div>
  );
}
