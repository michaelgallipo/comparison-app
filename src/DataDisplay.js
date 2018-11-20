import React, { Component } from "react";

export default class DataDisplay extends Component {
  render() {
    return (
      <>
        {this.props.data.temperature && (
          <>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{this.props.cityName.city}</h4>
                  <h6 className="card-subtitle mb-2 font-weight-bold">
                    {this.props.data.summary}
                  </h6>
                  <p className="card-text">
                    Current temperature: {this.props.data.temperature}F mph
                  </p>
                  <p className="card-text">
                    Current wind speed: {this.props.data.windSpeed}
                    mph
                  </p>
                  <p className="card-text">
                    Current humidity: {this.props.data.humidity}%
                  </p>
                  <p className="card-text">
                    Chance of rain: {this.props.data.rain}%
                  </p>
                  <p className="card-text">
                    Sunrise: {this.props.data.sunrise}
                  </p>
                  <p className="card-text">Sunset: {this.props.data.sunset}</p>
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
