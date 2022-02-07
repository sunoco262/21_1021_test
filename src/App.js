import React, { Component } from "react";
import "./App.css";
import Numeron from "./Numeron.js";
import History from "./History.js";
class App extends Component {
  render() {
    return (
      <div className="body">
        <h1>Numeron</h1>
        <Numeron />
        <History/>
      </div>
    );
  }
}

export default App;
