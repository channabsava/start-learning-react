import React, { Component } from "react";
import style from "./App.module.css";
import axios from "axios";
import Profile from "./Profile";

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: "" };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users").then(data => {
      this.setState({ data: data.data });
    });
  }
  render() {
    return (
      <div className={style.base}>
        {this.state &&
          this.state.data &&
          this.state.data.map(data => {
            return <Profile profileImage={data.avatar_url} name={data.login} />;
          })}
      </div>
    );
  }
}
