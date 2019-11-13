import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        width={this.props.width ? this.props.width : "100%"}
        height={this.props.height ? this.props.height : "100%"}
        alt={this.props.alt}
      />
    );
  }
}
