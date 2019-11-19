import TodoContainer from "./Container /TodoContainer";
import React, { Component } from "react";
import style from "./addTodo.module.css";

class App extends Component {
  render() {
    return (
      <div className={style.base}>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
