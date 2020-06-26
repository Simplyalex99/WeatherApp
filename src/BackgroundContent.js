import React, { Component } from "react";
import "./App.css";

import NavBar from "./NavBar.js";
import { setImage } from "./ImageSlider.js";
import defaultImg from "./MountainImages/image1.png";
// import all images in IMageSlider and return that; refer to history stackOverFlow
export class Background extends Component {
  constructor() {
    super();
    this.state = {
      imageFile: defaultImg,
    };
  }

  updateImage =(e)=> {
    var imagePathName = setImage(e);
 

    this.setState({
      imageFile: imagePathName,
    });
  }

  render() {

    const { imageFile } = this.state;
   
    return (
      <div className="image-container">
        <img src={imageFile} alt="mountain image" className="image-resize" />

        <NavBar updateImage={this.updateImage} />
      </div>
    );
  }
}
export default Background;
