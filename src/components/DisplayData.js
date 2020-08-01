import React, { Component } from "react";
import "../styles/App.css";
//Add conditional render, pass in props and boolean and call this class in searchBar
export class DisplayData extends Component {
  closeBox = () => {
    document.getElementById("result").style.display = "none";
  };
  render() {
    const { hitOnEnter, weather, errorResult } = this.props;
    var failComment = <p>Sorry! An unexpected error has occured </p>;
    var successComment = (
      <div className = "weather-description">
        <p>Country: {weather.country}</p>
    <p>City: {weather.city}</p>
        <p>temperature: {weather.temperature} C</p>
        <p>description: {weather.description}</p>
         <p>
          latitude and longitude: {weather.location.lat} , {weather.location.lon}
        </p> 
      </div>
    );
    var results = errorResult ? failComment : successComment;
    return hitOnEnter ? (
      <div class="displayBoxContainer" id="result">
        <div class="displayBox">
          <div class="close-btn-Frame" onClick={this.closeBox}>
            <div class="close-btn" onClick={this.closeBox}></div>
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
