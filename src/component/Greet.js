import React, { Component } from "react";

class Greet extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcom visitor"
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank for subscribing"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscrib</button>
      </div>
    );
  }
}
export default Greet;
