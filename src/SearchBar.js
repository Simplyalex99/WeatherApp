import React, { Component } from "react";
import "./App.css";
import searchIcon from "./MountainImages/searchIcon.png";
import DropdownBar from "./DropdownBar.js";

import { checkGeolocationIsSupported, getPosition } from "./locationFinder.js";
import { queryWeather } from "./WeatherAPI.js";
import DisplayData from "./DisplayData.js";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // add modules in github

export class SearchBar extends Component {
  constructor() {
    // pass in weather as prop and searchMessage to weatherData.
    super();

    this.state = {
      validData: false,
      displayDataOnEnter: false,
      closeOnEnter: false,
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
  getCurrentWeather = () => {
    var results = queryWeather(this.state.userResponse);

    this.setState({
      weather: {
        location: results.coordinates,
        description: results.description,
        temperature: results.temp_Value,
        country: results.country,
      },
      displayDataOnEnter: true,
    });
  };

  updateSearchMessage(message) {
    this.setState = {
      searchMessage: "search by " + message,
    };
  }

  getLocation() {
    if (checkGeolocationIsSupported()) {
      let coordinates = getPosition();

      this.setState({
        weather: { location: coordinates },
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

      weather,
      displayDataOnEnter,
      validData,
      closeOnEnter,
    } = this.state;
    return (
      <React.Fragment>
        <div className="search_box">
          <input
            type="text"
            placeholder="Type to search"
            className="search_txt"
            value={userResponse}
            onChange={this.updateUserResponseValue}
          ></input>
          <FontAwesomeIcon
            icon={faSearch}
            className="search-btn"
          ></FontAwesomeIcon>
          <div className="submit-btn">
            <input
              type="submit"
              onSubmit={this.getCurrentWeather}
              onClick={this.getCurrentWeather}
            ></input>
          </div>
        </div>

        <DropdownBar />

        <DisplayData
          hitOnEnter={displayDataOnEnter}
          weather={weather}
          errorResult={validData}
          clickOnCloseButton={closeOnEnter}
        />
      </React.Fragment>
    );
  }
}

export default SearchBar;
