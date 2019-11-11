import React, { Component } from "react";
import styles from "./card2.module.css";

class Card2 extends Component {
  render() {
    return (
      <div className={styles.card2}>
        <div className={styles.container}>
          <div className={styles.heading}>{this.props.heading}</div>
          <div className={styles.subHeading}>{this.props.subHeading}</div>
          <a className={styles.link} href="https://www.sbimf.com/en-us">
            {this.props.link}
          </a>
        </div>
      </div>
    );
  }
}
export default Card2;
