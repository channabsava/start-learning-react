import React, { Component } from "react";
import styles from "./Card1.module.css";

class Card1 extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.card1}>
        <div className={styles.container}>
          <div className={styles.infocontainer}>
            <div className={styles.temperature}>
              {this.props.temperature}
              <sup>o</sup>
            </div>
            <div>
              <div className={styles.heading}>{this.props.heading}</div>
              <div className={styles.subHeading}>{this.props.subHeading}</div>
            </div>

            <div className={styles.time}>
              {this.props.time[0]}
              <span className={styles.abbreviations}>{this.props.time[1]}</span>
            </div>

            <div className={styles.day}>{this.props.day}</div>
          </div>
        </div>
        <div classNmae={styles.icon}>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
          <div className={styles.square3}></div>
          <div className={styles.square4}></div>
        </div>
      </div>
    );
  }
}
export default Card1;
