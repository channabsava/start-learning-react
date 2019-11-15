import React, { Component } from "react";

export default class Counter extends Component {
  increment = () => {
    this.props.increment("hi");
  };
  decrement = () => {
    this.props.decrement();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
        <div>count:{this.props.count}</div>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          -
        </button>
      </div>
    );
  }
}
