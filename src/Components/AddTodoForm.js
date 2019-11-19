import React, { Component } from "react";
import style from "../addTodo.module.css";

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  addtodo = () => {
    if (this.props.addTodo) {
      this.props.addTodo(this.state.todo);
    }
  };
  deleteTodo = (id, text) => {
    if (this.props.deleteTodo) {
      this.props.deleteTodo(id);
      this.setState({ todo: "" });
    }
  };

  render() {
    return (
      <div className={style.base}>
        <div className={style.text}>Enter-Text:</div>
        <input
          className={style.textBox}
          type="text"
          value={this.state.todo}
          onChange={e => {
            this.setState({ todo: e.target.value });
          }}
        />

        <button
          className={style.buttonProperty}
          onClick={() => {
            this.addtodo();
            this.setState({ todo: "" });
          }}
        >
          <div>AddTodo</div>
        </button>
        {this.props.data.map(val => {
          return (
            <>
              <div className={style.text}>
                {val.id}
                {"    "}
                {val.text}
              </div>

              <button
                className={style.buttonProperty}
                onClick={() => {
                  this.deleteTodo(val.id, val.text);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    );
  }
}
