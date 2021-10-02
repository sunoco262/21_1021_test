import React, { Component } from "react";

class NumberButton extends Component {
  constructor(props) {
    super(props);
    this.style = {};
  }
  render() {
    return (
      <>
        <button className="NumberButton">{this.props.number}</button>
      </>
    );
  }
}

export default NumberButton;
