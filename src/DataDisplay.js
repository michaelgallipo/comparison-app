import React, { Component } from "react";

export default class DataDisplay extends Component {
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
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
