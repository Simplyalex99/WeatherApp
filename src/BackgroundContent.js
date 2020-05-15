import React, { Component } from 'react';
import './App.css';
import defaultImage from './MountainImages/img1.png';
import navBar from './NavBar.js';
import NavBar from './NavBar.js';
function Background(){

return(

<div className = "image-container">


<img src = {defaultImage} alt = "mountain image" className = "image-resize"/>

<NavBar/>
</div>
);





}



export default Background;