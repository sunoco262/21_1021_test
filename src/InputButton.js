import React, { Component } from "react";

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.x = this.props.x;
    this.y = this.props.y;
    this.style = {
      backgroundColor: "gray",
      position: "absolute",
      width: "10vw",
      height: "10vw",
      top: this.y + "vw",
      left: this.x + "vw",
      borderRadius: "5vw",
      color: "white",
      textAlign: "center"
    };
  }
  render() {
    return <button style={this.style}>{this.props.text}</button>;
  }
}

export default InputButton;
