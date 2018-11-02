import React, { Component } from "react";
import "./App.css";

class App extends Component {
  coordinateSubmit(e){
    e.preventDefault();
      const latitude= e.target.elements.latitude.value;
      const longitude= e.target.elements.longitude.value;
      console.log(latitude);
      console.log(longitude);
  
  }

  getweatherdata(){
      fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7f875b51f5e01333c06b1d559e43ce9a/43.3104064, -70.99034379999999')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
  });
  }

  render() {
    return (
      <div className="App">
        <h1>Comparison App</h1>
        <form onSubmit={this.coordinateSubmit}>
          <input
            type="text"
            name="latitude"
            placeholder="Enter Latitude"
          />
          <input
            type="text"
            name="longitude"
            placeholder="Enter longitude"
          />
          <button>Submit</button>
        </form>
        <button onClick= {this.getweatherdata}> get data </button>
      </div>
    );
  }
}

export default App;
