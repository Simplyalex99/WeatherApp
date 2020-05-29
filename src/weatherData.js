import React, { Component } from "react";

export class WeatherData extends Component {
  //upon hiting enter pass in the request accordingly here to backend. For location, use the pop up box so change function of location
  getDataBySearchMethod() {
    var searchMethod = this.props.searchMethodText;

    if (searchMethod == "search by Location") {
    } else if (searchMethod == "search by City name") {
    } else {
    }
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
export default WeatherData;
