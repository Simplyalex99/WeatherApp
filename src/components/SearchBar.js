import React, { Component } from "react";
import "../styles/App.css";

import DropdownBar from "./DropdownBar.js";

import DisplayData from "./DisplayData.js";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // add modules in github

export class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      invalidData: false,
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
  getCurrentWeather = async () => {
    const API_KEY = "";
    //Lines 34-36 format user's response to correct format input.
    var uppercaseFirstLetter = this.state.userResponse.charAt(0).toUpperCase();
    var lowercaseWord = this.state.userResponse.toLowerCase();
    var city = uppercaseFirstLetter + lowercaseWord.slice(1);
    try {
      let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      var response = await fetch(api_url);
      var body = await response.json();
      const KELVIN = 273;

      this.setState({
        weather: {
          description: body.weather[0].description,
          temperature: Math.floor(body.main.temp - KELVIN),
          location: body.coord,
          country: body.sys.country,
          city: city,
        },
        displayDataOnEnter: true,
      });
    } catch (err) {
      //  updates state property to display to user about unexpected error

      this.setState({
        invalidData: true,
      });
    }
  };

  getLocation() {}
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
      invalidData,
      closeOnEnter,
    } = this.state;
    return (
      <React.Fragment>
        <div className="search_box">
          <input
            type="text"
            placeholder="Enter city"
            className="search_txt"
            value={userResponse}
            onChange={this.updateUserResponseValue}
          ></input>
          <FontAwesomeIcon
            icon={faSearch}
            className="search-btn"
            onSubmit={this.getCurrentWeather}
            onClick={this.getCurrentWeather}
          ></FontAwesomeIcon>
        </div>

        <DropdownBar />

        <DisplayData
          hitOnEnter={displayDataOnEnter}
          weather={weather}
          errorResult={invalidData}
          clickOnCloseButton={closeOnEnter}
        />
      </React.Fragment>
    );
  }
}

export default SearchBar;
