import React, { Component } from 'react';
import './App.css';
export class DropdownBar extends Component{
render(){

return(

 <div className = "verticalBarContainer"> 
<ul>
    <li>
       <a> 
    Search options
    </a>
    <ul>

    <li  id = "text1" onClick = {() => this.props.updateSearchText(document.getElementById("text1").innerHTML)}>City name</li> 
       <li id = "text2" onClick = {() => this.props.updateSearchText(document.getElementById("text2").innerHTML)}>Postal Code</li>
       <li id = "text3" onclick = {() => this.props.updateSearchText(document.getElementById("text3").innerHTML)}>Location</li>

    </ul>
   </li>




</ul>

</div>

);





}
}


export default DropdownBar;