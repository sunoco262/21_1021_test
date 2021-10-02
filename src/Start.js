import React, { Component } from "react";
let card = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle() {
  var a = 0;
  var b = 0;
  var tmp = 0;
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);
  tmp = card[a];
  card[a] = card[b];
  card[b] = tmp;
}
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: card
    };
  }
  shuffle = () => {
    shuffle();
    this.setState({
      data: card
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button onClick={this.shuffle}>Start</button>
      </>
    );
  }
}
export default Start;
