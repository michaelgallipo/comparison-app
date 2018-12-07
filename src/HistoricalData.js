import React, {Component} from "react";
import Modal from "react-responsive-modal";
const moment = require("moment");


export default class HistoricalData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    console.log({props: this.props})
    return (
      <div style={styles}>
        <Modal open={this.props.show} onClose={this.props.onHistoricalDataClose} center>
          <>
            {this.props.data.temperature && (
              <>
                        <p>Summary: {this.props.data.summary}</p>
                      
                        <p>Temperature: {this.props.data.temperature}</p>
                      
                        <p>Wind Speed: {this.props.data.windSpeed} mph</p>
                      
                        <p>Humidity: {this.props.data.humidity}%</p>
                     <p>Chance of rain:
                        {this.props.data.rain}%</p>
                      <p>Sunrise:
                        {this.props.data.sunrise}</p>
                      <p>Sunset:
                        {this.props.data.sunset}</p>
                    
   
              </>
            )}
          </>
        </Modal>
      </div>
    );
  }
}


// render(<App />, document.getElementById("root"));
