import React, { Component } from "react";
import styles from "./card2.module.css";

class Card2 extends Component {
  render() {
    return (
      <div className={styles.card2}>
        <div className={styles.container}>
          <div className={styles.desc}>
            No penalty on withdrawal from your fixed deposit
          </div>
          <div className={styles.int}>
            On first partual withdrawal upto 25% of your original FD principle
            value
          </div>

          <a className={styles.textprop} href="https://www.sbimf.com/en-us">
            KNOW MORE
          </a>
        </div>
      </div>
    );
  }
}
export default Card2;
