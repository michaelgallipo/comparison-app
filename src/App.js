import React, { Component } from "react";
import "./App.css";
import DataDisplay from "./DataDisplay";
const moment = require("moment");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { summary1: {}, summary2: {}, geoData1: {}, geoData2: {} };
  }

  coordinateSubmit = e => {
    e.preventDefault();
    const latitude = e.target.elements.latitude.value;
    const longitude = e.target.elements.longitude.value;
    const latitude2 = e.target.elements.latitude2.value;
    const longitude2 = e.target.elements.longitude2.value;
    console.log(latitude);
    console.log(longitude);
    console.log(latitude2);
    console.log(longitude2);
    this.getweatherdata(latitude, longitude, "summary1");
    this.getweatherdata(latitude2, longitude2, "summary2");
  };

  zipcodeSubmit = e => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    const zipcode2 = e.target.elements.zipcode2.value;
    this.getCityData(zipcode,"geoData1");
    this.getCityData(zipcode2, "geoData2");
  }

  getCityData = (zipcode, stateKey) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(data => {
        console.log(data);
      })
    })
    console.log(zipcode);
  }

  getweatherdata = (latitude, longitude, stateKey) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7f875b51f5e01333c06b1d559e43ce9a/${latitude},${longitude}`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(data => {
          console.log(data);
          this.setState({
            ...this.state,
            [stateKey]: {
              summary: data.daily.summary,
              temperature: data.currently.temperature,
              windSpeed: data.currently.windSpeed,
              humidity: data.currently.humidity,
              rain: data.currently.precipProbability,
              sunrise: moment.unix(data.daily.data[0].sunriseTime).format("LT"),
              sunset: moment.unix(data.daily.data[0].sunsetTime).format("LT")
            }
          });
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className = "headline" ><h1>COMPARISON APP</h1>
        <h4>Enter up to two cities here:</h4>
        </div>
        <form onSubmit={this.coordinateSubmit}>
          <div className = "row justify-content-lg-center" id = "data-entry" >
            <input
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="latitude"
              placeholder="Enter Latitude"
              // value="35.6895"
            />
            <input
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="longitude"
              placeholder="Enter longitude"
              // value="139.6917"
            />
          </div>
          <div className = "row justify-content-lg-center" id = "data-entry">
            <input
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="latitude2"
              placeholder="Enter Latitude"
              // value="35.6895"
            />
            <input
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="longitude2"
              placeholder="Enter longitude"
              // value="139.6917"
            />
          </div>
          <button>Submit</button>
        </form>
        <form onSubmit={this.zipcodeSubmit}>
          <div className = "row justify-content-lg-center" id = "data-entry" >
            <input
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="zipcode"
              placeholder="Enter Zipcode"
              // value="35.6895"
            />
          </div>
          <div className = "row justify-content-lg-center" id = "data-entry" >
            <input
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="zipcode2"
              placeholder="Enter Zipcode"
              // value="35.6895"
            />
          </div>
          <button>Submit</button>
        </form>

        <br></br>
        <div className = "container" >
        <div className = "row" >
        <DataDisplay data={this.state.summary1} />
        <DataDisplay data={this.state.summary2} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
