import React, { Component } from "react";
import "./App.css";
import Numeron from "./Numeron.js";
import Timer from "./Timer.js";
import Rect from "./Rect.js"
import Counter from "./Counter.js";
class App extends Component {
  render() {
    return (
      <>
        <Numeron />
        <Timer />
        <Rect x="400" y="200" w="200" h="200" c="cyan"/>
      </>
    );
  }
}

export default App;
