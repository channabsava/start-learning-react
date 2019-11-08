import React, { Component } from "react";
import style from "./card3.module.css";

class Card3 extends Component {
  render() {
    return (
      <div className={style.card3}>
        <div className={style.name}>Alexndra Dadario</div>
        <div className={style.title}>Parker Industries</div>
        <div className={style.round3}>UX DESIGNER</div>
        <div className={style.profile}>
          <div className={style.profiletext}>USUALLY COLLABORATED WITH</div>
          <div className={style.dot}>
            <div className={style.icon}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card3;
