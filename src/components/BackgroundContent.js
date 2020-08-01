import React, { Component } from "react";
import "../styles/App.css";

import NavBar from "./NavBar.js";
import { setImage } from "../functions/ImageSlider.js";
import defaultImg from "../images/MountainImages/image1.png";

export class Background extends Component {
  constructor() {
    super();
    this.state = {
      imageFile: defaultImg,
      timer: ''
    };
  }
  stopTimer = ()=> {

    clearInterval(this.state.timer);
    
        
      }
      updateTimer = (e)=>{
    
    
    this.setState({timer: e});
     
      }

  updateImage = (e) => {
    var imagePathName = setImage(e);

    this.setState({
      imageFile: imagePathName,
    });
  };

  render() {
    const { imageFile } = this.state;

    return (
      <div>
        <img src={imageFile} alt="mountain image" className="image-resize" />

        <NavBar updateImage={this.updateImage}   updateTimer = {this.updateTimer} stopTimer = {this.stopTimer}/>
      </div>
    );
  }
}
export default Background;
