import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      style: {borderRadius:'0px'}
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      style: {borderRadius:this.state.count+'px'}
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
      </>
    );
  }
}

export default Counter;
