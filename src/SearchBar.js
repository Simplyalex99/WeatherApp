import React, { Component } from 'react';
import './App.css';
import searchIcon from './MountainImages/searchIcon.png';
import DropdownBar from './DropdownBar.js';
import weatherData  from './weatherData.js';
import {checkGeolocationIsSupported, getPosition} from './locationFinder.js';

export class SearchBar extends Component{
    constructor(){ // pass in weather as prop and searchMessage to weatherData. 
        super();
        
        this.state = {
        searchMessage : "search by city",
        
        weather:{
            location : {

                latitude: "",
                longitude: "",
        
            },
        
        temperature : "",
        city:"",
        country: ""
        
        }
        }
    }
        updateSearchMessage(message){

            this.setState = {
            
            searchMessage : "search by " + message
            
            }
            
            
            }

getLocation(){

   
if(checkGeolocationIsSupported()){



    let coordinates = getPosition();
    

this.setState({


    location : coordinates
})
}



else{
console.log("error geolocation no supported");


}


}
    
render(){

return(
<div>
<input type = "text" placeholder = " search..." className = "search_box" value = "" id = "queryResponse"> 

</input>


<DropdownBar updateSearchText= {(e) => this.updateSearchMessage(e)} getLocation = {() => this.getLocation()}/>
<div>
<img src = {searchIcon} className = "shiftSearchIcon"></img>
</div>
<weatherData weather= {this.state.weather} searchMethodText = {this.state.searchMessage} userResponse = {document.getElementById("queryResponse")} />
</div>


);





}

}

export default SearchBar;