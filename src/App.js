import React, { Component } from "react";
import "./App.css";
import Numeron from "./Numeron.js";
import Timer from "./Timer.js";
import History from "./History.js";
class App extends Component {
  render() {
    return (
      <div className="body">
        <Numeron />
        <Timer/>
        <History/>
      </div>
    );
  }
}

export default App;
