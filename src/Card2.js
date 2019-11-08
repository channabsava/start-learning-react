import React, { Component } from "react";
import styles from "./Card2.modules.css";

class Card2 extends Component {
  render() {
    return (
      <div className={styles.card2}>
        <div class="container">
          <div class="desc">
            No penalty on withdrawal from your fixed deposit
          </div>
          <div class="int">
            On first partual withdrawal upto 25% of your original FD principle
            value
          </div>
          <a href="https://www.sbimf.com/en-us">KNOW MORE</a>
        </div>
      </div>
    );
  }
}
export default Card2;
