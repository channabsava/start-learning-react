import React, { Component } from "react";
import style from "./App.module.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: "" };
  }
  componentDidMount() {
    console.log("Component did mount ");
    fetch("https://api.github.com/users")
      .then(result => result.json())
      .then(data => {
        this.setState({ data });
        console.log(this.state.data);
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
                <div>
                  <img src={data.avatar_url} alt="profile"></img>
                </div>
                <div className={style.name}>{data.login}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
