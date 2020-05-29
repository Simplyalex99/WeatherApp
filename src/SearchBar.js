import React, { Component } from "react";
import "./App.css";
import searchIcon from "./MountainImages/searchIcon.png";
import DropdownBar from "./DropdownBar.js";
import WeatherData from "./weatherData.js";
import { checkGeolocationIsSupported, getPosition } from "./locationFinder.js";

export class SearchBar extends Component {
  constructor() {
    // pass in weather as prop and searchMessage to weatherData.
    super();

    this.state = {
      searchMessage: "search by city",
      userResponse: "",
      weather: {
        location: {
          latitude: "",
          longitude: "",
        },

        temperature: "",
        city: "",
        country: "",
      },
    };
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
    const { userResponse,weather,searchMessage } = this.state;
    return (
        
      <div>
          <form>
        <input
          type="text"
          placeholder=" search..."
          className="search_box"
          value={userResponse}
          onChange = {this.updateUserResponseValue}
        ></input>
</form>
        <DropdownBar
          updateSearchText={(e) => this.updateSearchMessage(e)}
          getLocation={() => this.getLocation()}
        />
        <div>
          <img src={searchIcon} className="shiftSearchIcon"></img>
        </div>
        <WeatherData
          weather={weather}
          searchMethodText={searchMessage}
          userResponse={userResponse}
        />
      </div>
    );
  }
}

export default SearchBar;
