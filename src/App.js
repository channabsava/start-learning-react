import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "react"
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return this.state.name !== nextState.name;
  }
  render() {
    return (
      <div className="App">
        <div>
          <p>Start editing to see some magic happen :)</p>
          <button onClick={() => this.setState({ name: "anil" })}>click</button>
          <button onClick={() => this.setState({ name: "react" })}>
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default App;
