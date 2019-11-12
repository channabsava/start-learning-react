// import React, { Component } from "react";

// import Hello from "./Hello";

// export default class Lifecycle extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "react"
//     };
//   }
//   componentDidMount() {
//     console.log("Component did mount");
//   }
//   componentWillMount() {
//     console.log("component will mount");
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount()");
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate()");
//     return this.state.name !== nextState.name;
//   }
//   getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps(props, state) ");
//     return null;
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>Start editing to see some magic happen :)</p>
//         <button onClick={() => this.setState({ name: "anil" })}>
//           click me
//         </button>
//         <button onClick={() => this.setState({ name: "react" })}>
//           click me
//         </button>
//       </div>
//     );
//   }
// }
