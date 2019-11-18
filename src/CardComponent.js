import React, { Component } from "react";
import style from "./Card.module.css";

export default class CardComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <div className={style.images}>
            <img
              src={this.props.src}
              width="100%"
              height="100%"
              alt="Profiles"
            />
            <div className={style.names}>{this.props.login}</div>
          </div>
        </div>
      </div>
    );
  }
}
