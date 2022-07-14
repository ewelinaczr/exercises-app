import React from "react";
import { Fragment } from "react";
// STYLES
import styles from "./Banner.module.scss";
// COMPONENTS
import Search from "./Search";
import Navbar from "./Navbar";
import Graphic from "./Graphic";
// ICONS
import { GiBodyBalance } from "react-icons/gi";

const imgSrc =
  "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function Banner() {
  return (
    <Fragment>
      <div className={styles.grid}>
        <div className={styles.text}>
          <Navbar />
          <h1 className={styles.message}>WORK OUT</h1>
          <div className={styles.explore}>
            <h2 className={styles.message_small}>Sweat, Smile and Repeat</h2>
            <button>Explore Exercises</button>
          </div>

          <Graphic />
          <Search />
        </div>
        <div className={styles.image}>
          <img className={styles.photo} src={imgSrc} alt="hantle exercise" />
          <p className={styles.slogan}>
            Check out the most <br />
            <span>
              effective <span>exercises</span>
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
