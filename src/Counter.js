import React, { Component } from "react";
let y = 0;
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: y,
      style: {
        backgroundColor: "red",
        position: "absolute",
        left: "80vw",
        top: y + "px",
        width: "20vw",
        height: "20vh"
      }
    };
  }

  increment = () => {
    y = y + 1;
    this.setState({
      count: y,
      style: {
        backgroundColor: "red",
        position: "absolute",
        left: "80vw",
        top: y + "px",
        width: "20vw",
        height: "20vh"
      }
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Click me!!</button>
        <button onClick={this.decrement}>-</button>
        <div style={this.state.style}></div>
      </>
    );
  }
}

export default Counter;
