import React, { Component } from "react";
import CardComponent from "../CardComponent";
import style from "../Card.module.css";
class CardUser extends Component {
  componentDidMount() {
    this.props && this.props.getCard();
  }
  render() {
    return (
      <div className={style.base}>
        {this.props &&
          this.props.UserData &&
          this.props.UserData.userData &&
          this.props.UserData.userData.map(user => {
            return (
              <CardComponent
                src={user.avatar_url}
                login={user.login}
                key={user.login}
              />
            );
          })}
      </div>
    );
  }
}
export default CardUser;
