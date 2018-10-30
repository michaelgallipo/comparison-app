import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Comparison App</h1>
        <form>
          <input
            type="text"
            name="zipCodeOne"
            placeholder="Enter First Zip Code"
          />
          <button>Submit Zip Code</button>
        </form>
      </div>
    );
  }
}

export default App;
