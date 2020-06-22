import React, { Component } from "react";
import "./App.css";
//Add conditional render, pass in props and boolean and call this class in searchBar
export class DisplayData extends Component {
  render() {
    const { hitOnEnter, weather } = this.props;
    var failComment = <p>Sorry! An unexpected error has occured </p>;
    var successComment = (
      <div>
        <p>temp: {weather.temperature}</p>
        <p>description: {weather.description}</p>
        <p>
          location: {weather.location.latitude} , {weather.location.longitude}
        </p>
      </div>
    );
    var results = errorResult ? failComment : successComment;
    return hitOnEnter ? (
      <div class="displayBoxContainer">
        <div class="displayBox">
          <div class="close-btn-Frame">
            <div class="close-btn"></div>
          </div>
          {results}
        </div>
      </div>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }
}

export default DisplayData;
