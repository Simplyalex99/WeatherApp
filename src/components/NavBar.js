import React, { Component } from "react";
import "../styles/App.css";



export class NavBar extends Component {
  handleMouseEvent(e) {
    const interval = setInterval(() => {
      this.props.updateImage(e);
    }, 1500);

    this.props.updateTimer(interval);
  }

  pauseMouseEvent() {
    this.props.stopTimer();
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="leftButton"
          onMouseOver={() => this.props.updateImage(true)}
          onMouseLeave={() => this.pauseMouseEvent()}
        ></div>
        <div
          className="rightButton"
          onMouseOver={() => this.props.updateImage(false)}
          onMouseLeave={() => this.pauseMouseEvent()}
        ></div>
      </React.Fragment>
    );
  }
}
export default NavBar;
