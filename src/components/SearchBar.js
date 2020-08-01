import React, { Component } from "react";
import "./App.css";

import DropdownBar from "./DropdownBar.js";

import DisplayData from "./DisplayData.js";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // add modules in github

export class SearchBar extends Component {
  constructor() {

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
  getCurrentWeather = async ()=> {
    
    const API_KEY = "";
    var city = this.state.userResponse;
    let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    var response = await fetch(api_url);
    var body = await response.json();
 const KELVIN = 273;
 
 this.setState({
   weather: {description : body.weather[0].description,
   temperature : Math.floor(body.main.temp - KELVIN),
 location  : body.coord,
   country : body.sys.country,
   city: city
   }, 
   displayDataOnEnter:true
 });
     
   }
 

  updateSearchMessage(message) {
    this.setState = {
      searchMessage: "search by " + message,
    };
  }

  getLocation() {
 
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
            className = "submit-btn-adder"
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
