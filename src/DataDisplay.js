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
                  <h5 className="card-title">{this.props.data.summary}</h5>
                  <h6 className="card-subtitle mb-2 font-weight-bold">
                    Current temperature: {this.props.data.temperature}F
                  </h6>
                  <p className="card-text">
                    Current wind speed: {this.props.data.windSpeed}
                    mph
                  </p>
                  <p className="card-text">
                    Current humidity: {this.props.data.humidity * 100}%
                  </p>
                  <p className="card-text">
                    Chance of rain: {this.props.data.rain * 100}
                  </p>
                  <p className="card-text">Sunrise: {this.props.data.sunrise}</p>
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
