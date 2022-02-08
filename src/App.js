import React, { Component } from "react";
import "./App.css";
import Numeron from "./Numeron.js";
class App extends Component {
  render() {
    return (
      <div className="body">
        <h1>Numeron</h1>
        <Numeron />
      </div>
    );
  }
}

export default App;
