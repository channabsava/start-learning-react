import React, { Component } from "react";
import style from "./card3.module.css";

class Card3 extends Component {
  render() {
    return (
      <div className={style.card3}>
        <div className={style.name}>{this.props.name}</div>
        <div className={style.companyName}>{this.props.companyName}</div>
        <div className={style.designation}>{this.props.designation}</div>
        <div className={style.profile}>
          <div className={style.heading}>{this.props.heading}</div>
          <div className={style.dot}>
            <div className={style.icon}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card3;
