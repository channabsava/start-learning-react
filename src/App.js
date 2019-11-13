import React, { Component } from "react";
import style from "./App.module.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: "" };
  }
  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(result => result.json())
      .then(data => {
        this.setState({ data });
      });
  }
  render() {
    return (
      <div className={style.base}>
        {this.state &&
          this.state.data &&
          this.state.data.map(data => {
            return (
              <div>
                <div className={style.images}>
                  <img
                    src={data.avatar_url}
                    width="100%"
                    height="100%"
                    alt="profile"
                  ></img>
                </div>
                <div className={style.name}>{data.login}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
