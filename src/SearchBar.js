import React, { Component } from 'react';
import './App.css';
import searchIcon from './MountainImages/searchIcon.png';
import DropdownBar from './DropdownBar.js';


export class SearchBar extends Component{
    constructor(){ // pass in weather as prop and searchMessage to weatherData. 
        super();
        
        this.state = {
        searchMessage : "search by city",
        
        weather:{
        
        temperature : "",
        city:"",
        country: ""
        
        }
        }
    }
        updateSearchMessage(message){

            this.setState = {
            
            searchMessage : message
            
            }
            
            
            }
    
render(){

return(
<div>
<input type = "text" placeholder = " search..." className = "search_box" value = ""> 

</input>


<DropdownBar updateSearchText= {this.updateSearchMessage}/>
<div>
<img src = {searchIcon} className = "shiftSearchIcon"></img>
</div>
</div>


);





}

}

export default SearchBar;