import React, { Component } from "react";
import "../styles/App.css";
export class DropdownBar extends Component {
  render() {
    return (
      <div className="infoIconContainer">
        <ul>
          <li>
            <p className="questionMark"> i</p>
            <ul>
              <li>
                Description : Enter the city name starting with a capital letter. E.g London.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default DropdownBar;
