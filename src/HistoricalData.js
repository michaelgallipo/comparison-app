import React, {Component} from "react";
import Modal from "react-responsive-modal";
const moment = require("moment");


export default class HistoricalData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log({props: this.props})
    return (
      <div>
        <Modal 
          styles={{modal: {fontFamily: "sans-serif",borderRadius: '20px',textAlign: "center", width: '400px', border:"2px solid orange"}}} 
          open={this.props.show} 
          onClose={this.props.onHistoricalDataClose} 
          center
        >
          <>
            {this.props.data.temperature && (
              <>
                        <h3>{this.props.data.city}</h3>
                        <h4>{this.props.data.date.month}/{this.props.data.date.day}/{this.props.data.date.year}</h4>
                        <p>{this.props.data.summary}</p>
                      
                        <p>Temperature: {this.props.data.temperature}</p>
                      
                        <p>Wind Speed: {this.props.data.windSpeed} mph</p>
                      
                        <p>Humidity: {this.props.data.humidity}%</p>
                        <p>Chance of rain: {this.props.data.rain}%</p>
                        <p>Sunrise: {this.props.data.sunrise}</p>
                        <p>Sunset: {this.props.data.sunset}</p>
                    
   
              </>
            )}
          </>
        </Modal>
      </div>
    );
  }
}


// render(<App />, document.getElementById("root"));
