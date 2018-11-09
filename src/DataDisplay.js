import React, { Component } from "react";

export default class DataDisplay extends Component {
  render() {
    return (
      <>
        {this.props.data.temperature && (
          <>
            <h1>{this.props.data.summary}</h1>
            <h2>the current temperature is {this.props.data.temperature}F</h2>
            <h2>
              the current wind speed is {this.props.data.windSpeed}
              mph
            </h2>
            <h2>the current humidity is {this.props.data.humidity * 100}%</h2>
            <h2>Current chance of rain {this.props.data.rain * 100}</h2>
            <h2>Sunrise will be at {this.props.data.sunrise}</h2>
            <h2>Sunset will be at {this.props.data.sunset}</h2>
          </>
        )}
      </>
    );
  }
}
