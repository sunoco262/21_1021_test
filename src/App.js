import React, { Component } from "react";
import "./App.css";
import Numeron from "./Numeron.js";
import History from "./History.js";
class App extends Component {
  render() {
    return (
      <div className="body">
        <Numeron />
        <History/>
      </div>
    );
  }
}

export default App;
