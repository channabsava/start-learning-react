import React, { Component } from "react";
import styles from "./Card1.module.css";

class Card1 extends Component {
  render() {
    return (
      <div className={styles.card1}>
        <div className={styles.container}>
          <div className={styles.infocontainer}>
            <div className={styles.number}>
              12<sup>o</sup>
            </div>
            <div>
              <div className={styles.text1}>Scattered Cloud</div>
              <div className={styles.text}>Mississauga/Canada</div>
            </div>

            <div className={styles.time}>
              9:38<span className={styles.timepm}>p.m.</span>
            </div>

            <div class={styles.day}>Monday,03</div>
          </div>
        </div>
        <div classNmae={styles.icon}>
          <div className={styles.square1}></div>
          <div class={styles.square2}></div>
          <div class={styles.square3}></div>
          <div class={styles.square4}></div>
        </div>
      </div>
    );
  }
}
export default Card1;
