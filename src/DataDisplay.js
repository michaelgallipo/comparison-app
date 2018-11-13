import React, { Component } from "react";

export default class DataDisplay extends Component {
  render() {
    return (
      <>
        {this.props.data.temperature && (
          <>

        <div class = "col-lg-6">
          <div class= "card" >
            <div class= "card-body" >
              <h5 class= "card-title" >{this.props.data.summary}</h5>
              <h6 class= "card-subtitle mb-2 text-muted" >Current temperature: {this.props.data.temperature}F</h6>
              <p class= "card-text" >Current wind speed: {this.props.data.windSpeed}
              mph</p>
              <p class= "card-text" >Current humidity: {this.props.data.humidity * 100}%</p>
              <p class= "card-text" >Chance of rain: {this.props.data.rain * 100}</p>
              <p class= "card-text" >Sunrise: {this.props.data.sunrise}</p>
              <p class= "card-text" >Sunset: {this.props.data.sunset}</p>
              <a href= "#" class= "card-link" >Card link</a>
              <a href= "#" class= "card-link" >Another link</a>
            </div>
          </div>
        </div>

          </>
        )}
      </>
    );
  }
}
