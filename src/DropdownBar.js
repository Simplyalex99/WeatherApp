import React, { Component } from "react";
import "./App.css";
export class DropdownBar extends Component {
  render() {
    return (
      <div className="infoIconContainer">
        <ul>
          <li>
            <p className="questionMark"> i</p>
            <ul>
              <li>
                Description : Valid city name Toronto, valid zipCode 9 digit
                with hyphen or 5 digit
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default DropdownBar;
