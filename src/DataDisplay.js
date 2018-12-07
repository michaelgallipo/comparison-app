import React, { Component } from "react";
import HistoricalData from "./HistoricalData"
const moment = require("moment");

export default class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      historical: {}, 
      showHistoricalData: false 
    };
  }

  dateSubmit = e => {
    e.preventDefault();
    const year = e.target.elements.year.value;
    const month = e.target.elements.month.value;
    const day = e.target.elements.day.value;
    this.getHistoricalWeatherData(
      year,
      month,
      day,
      this.props.data.latitude,
      this.props.data.longitude,
      "historical"
    );
  };

  getHistoricalWeatherData = (
    year,
    month,
    day,
    latitude,
    longitude,
    stateKey
  ) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7f875b51f5e01333c06b1d559e43ce9a/${latitude},${longitude}, ${year}-${month}-${day}T12:00:00`
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
            showHistoricalData: true,
            [stateKey]: {
              summary: data.daily.data[0].summary,
              temperature: data.currently.temperature,
              windSpeed: data.currently.windSpeed,
              humidity: Math.trunc(data.currently.humidity * 100),
              rain: Math.round(data.currently.precipProbability * 100),
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

  onHistoricalDataClose = () => {
    this.setState({
      showHistoricalData: false
    })
  }

  render() {
    return (
      <>
        {this.props.data.temperature && (
          <>
            <div className="col-lg-6">
              <div className="card border-warning mb-3">
                <div className="card-body">
                  <h4 className="card-title">{this.props.cityName.city}</h4>
                  <h6 className="card-subtitle mb-2 font-weight-bold">
                    {this.props.data.summary}
                  </h6>
                  <p className="card-text">
                    <span className="weatherLabel"> Current temperature:</span>{" "}
                    {this.props.data.temperature}
                  </p>
                  <p className="card-text">
                    <span className="weatherLabel">Current wind speed:</span>{" "}
                    {this.props.data.windSpeed}
                    mph
                  </p>
                  <p className="card-text">
                    <span className="weatherLabel">Current humidity:</span>{" "}
                    {this.props.data.humidity}%
                  </p>
                  <p className="card-text">
                    <span className="weatherLabel">Chance of rain:</span>{" "}
                    {this.props.data.rain}%
                  </p>
                  <p className="card-text">
                    <span className="weatherLabel">Sunrise:</span>{" "}
                    {this.props.data.sunrise}
                  </p>
                  <p className="card-text">
                    <span className="weatherLabel">Sunset:</span>{" "}
                    {this.props.data.sunset}
                  </p>
                  <h6>To see historical weather data for this location</h6>
                  <form onSubmit={this.dateSubmit}>
                    <div id="data-entry">
                      <input
                        id="date"
                        className="form-control form-control-lg col-lg-4"
                        type="text"
                        name="year"
                        placeholder="Year"
                      />
                      <input
                        id="date"
                        className="form-control form-control-lg col-lg-4"
                        type="text"
                        name="month"
                        placeholder="Month"
                      />
                      <input
                        id="date"
                        className="form-control form-control-lg col-lg-4"
                        type="text"
                        name="day"
                        placeholder="Day"
                      />
                    </div>
                    <button className="btn btn-lg btn-outline-primary col-lg-4">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
            <HistoricalData
              onHistoricalDataClose={this.onHistoricalDataClose}
              show={this.state.showHistoricalData}
              data={this.state.historical}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

