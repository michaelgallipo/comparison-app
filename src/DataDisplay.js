import React, { Component } from "react";

export default class DataDisplay extends Component {
  render(){
    return <h1>{this.props.data}</h1>
  }
}