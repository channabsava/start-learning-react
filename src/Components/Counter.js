import React, { Component } from "react";
import style from "../Count.module.css";

export default class Counter extends Component {
  increment = () => {
    this.props.increment("hi");
  };
  decrement = () => {
    this.props.decrement("hello");
  };
  render() {
    console.log(this.props);
    return (
      <div className={style.opertor}>
        <button
          className={style.buttonproperty}
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
        <div>count:{this.props.count}</div>
        <button
          className={style.buttonproperty}
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
