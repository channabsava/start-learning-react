import React, { Component } from "react";
import style from "./App.module.css";
import Image from "./Image";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className={style.images}>
          <Image src={this.props.profileImage} alt="profile" />
        </div>
        <div className={style.name}>{this.props.name}</div>
      </div>
    );
  }
}
