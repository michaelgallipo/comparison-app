import React, { Component } from "react";
import "./App.css";
import DataDisplay from "./DataDisplay";
const moment = require("moment");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { summary1: {}, summary2: {}, geoData1: {}, geoData2: {} };
  }

  zipcodeSubmit = e => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
    const zipcode2 = e.target.elements.zipcode2.value;
    this.getCityData(zipcode, "geoData1");
    this.getCityData(zipcode2, "geoData2");
  };

  getCityData = (zipcode, stateKey) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`
    ).then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response
        .json()
        .then(data => {
          console.log(data);
          console.log(data.results[0].address_components[1].long_name);
          this.setState({
            ...this.state,
            [stateKey]: {
              city: data.results[0].address_components[1].long_name,
              latitude: data.results[0].geometry.location.lat,
              longitude: data.results[0].geometry.location.lng
            }
          });
        })
        .then(() => {
          this.getweatherdata(
            this.state.geoData1.latitude,
            this.state.geoData1.longitude,
            "summary1"
          );
        })
        .then(() => {
          this.getweatherdata(
            this.state.geoData2.latitude,
            this.state.geoData2.longitude,
            "summary2"
          );
        });
    });
  };

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
              humidity: Math.trunc(data.currently.humidity * 100),
              rain: Math.round(data.currently.precipProbability * 100),
              sunrise: moment.unix(data.daily.data[0].sunriseTime).format("LT"),
              sunset: moment.unix(data.daily.data[0].sunsetTime).format("LT"),
              latitude: latitude,
              longitude: longitude
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
        <div className="headline">
          <h1>COMPARISON APP</h1>
          <h4>Enter up to two cities here:</h4>
        </div>

        <form onSubmit={this.zipcodeSubmit}>
          <div className="row justify-content-lg-center" id="data-entry">
            <input
              id="zip"
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="zipcode"
              placeholder="Enter Zipcode"
              // value="35.6895"
            />
          </div>
          <div className="row justify-content-lg-center" id="data-entry">
            <input
              id="zip"
              className="form-control form-control-lg col-lg-3"
              type="text"
              name="zipcode2"
              placeholder="Enter Zipcode"
              // value="35.6895"
            />
          </div>
          <button className="btn btn-lg btn-primary">Submit</button>
        </form>

        <br />
        <div className="container">
          <div className="row">
            <DataDisplay
              data={this.state.summary1}
              cityName={this.state.geoData1}
            />
            <DataDisplay
              data={this.state.summary2}
              cityName={this.state.geoData2}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
