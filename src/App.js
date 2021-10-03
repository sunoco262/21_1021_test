import React, { Component } from "react";
import "./App.css";
import Numeron from "./Numeron.js";
import Timer from "./Timer.js";
import Counter from "./Counter.js";
class App extends Component {
  render() {
    return (
      <>
        <Numeron />
        <Timer />
      </>
    );
  }
}

export default App;
