import React, { Component } from "react";
import Input from "./Input";
import style from "./Input.module.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      phoneNumber: ""
    };
  }
  handleClick = () => {
    console.log("Button clicked", this);
  };

  render() {
    return (
      <div className={style.base}>
        <div>
          Name:{" "}
          <Input
            value={this.state.name}
            onChange={val => {
              this.setState({ name: val });
            }}
          />
          Age:{" "}
          <Input
            value={this.state.age}
            onChange={val => {
              this.setState({ age: val });
            }}
          />
          Email:{""}
          <Input
            value={this.state.email}
            onChange={val => {
              this.setState({ email: val });
            }}
          />
          PhoneNumber:{""}
          <Input
            value={this.state.phoneNumber}
            onChange={val => {
              this.setState({ phoneNumber: val });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
