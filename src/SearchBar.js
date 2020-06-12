import React, { Component } from "react";
import "./App.css";
import searchIcon from "./MountainImages/searchIcon.png";
import DropdownBar from "./DropdownBar.js";
import WeatherData from "./weatherData.js";
import { checkGeolocationIsSupported, getPosition } from "./locationFinder.js";
import {
  requestDataByLocation,
  requestDataByZIPCode,
  requestDataByCityName,
} from "./WeatherAPI.js";
import DisplayData from "./DisplayData.js";
export class SearchBar extends Component {
  constructor() {
    // pass in weather as prop and searchMessage to weatherData.
    super();

    this.state = {
      displayDataOnEnter: false,
      searchMessage: "search by city",
      userResponse: "",
      weather: {
        location: {
          latitude: "",
          longitude: "",
        },
        description: "",
        temperature: "",
        city: "",
        country: "",
      },
    };
  }
  getDataBySearchMethod() {
    // Store data in results and have a different component or css file display the css box with html from results or object
    var searchMethod = this.state.searchMessage;
    var results;
    if (searchMethod === "search by Location") {
      var location = this.state.location;
      requestDataByLocation(location);
    } else if (searchMethod === "search by City name") {
      requestDataByCityName();
    } else {
      requestDataByZIPCode();
    }
  }

  updateSearchMessage(message) {
    this.setState = {
      searchMessage: "search by " + message,
    };
  }

  getLocation() {
    if (checkGeolocationIsSupported()) {
      let coordinates = getPosition();

      this.setState({
        location: coordinates,
      });
    } else {
      console.log("error geolocation no supported");
    }
  }
  updateUserResponseValue = (e) => {
    this.setState({
      userResponse: e.target.value,
    });
  };

  render() {
    const {
      userResponse,
      searchMessage,
      weather,
      displayDataOnEnter,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.getDataBySearchMethod}>
          <input
            type="text"
            placeholder={searchMessage}
            className="search_box"
            value={userResponse}
            onChange={this.updateUserResponseValue}
          ></input>
        </form>
        <DropdownBar
          updateSearchText={(e) => this.updateSearchMessage(e)}
          getLocation={() => this.getLocation()}
        />
        <div>
          <img src={searchIcon} className="shiftSearchIcon"></img>
        </div>
        <DisplayData hitOnEnter={displayDataOnEnter} weather={weather} />
      </div>
    );
  }
}

export default SearchBar;
