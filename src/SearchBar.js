import React, { Component } from 'react';
import './App.css';
import searchIcon from './MountainImages/searchIcon.png';
import DropdownBar from './DropdownBar.js';
function SearchBar(){

return(
<div>
<input type = "text" placeholder = " search..." className = "search_box"> 

</input>


<DropdownBar/>
<div>
<img src = {searchIcon} className = "shiftSearchIcon"></img>
</div>
</div>


);





}



export default SearchBar;