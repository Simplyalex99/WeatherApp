import React, { Component } from 'react';
import './App.css';

function DropdownBar(){

return(

 <div className = "verticalBarContainer"> 
<ul>
    <li>
       <a> 
    Search options
    </a>
    <ul>

       <li>City name</li>
       <li>Postal Code</li>
       <li>Location</li>

    </ul>
   </li>




</ul>

</div>

);





}



export default DropdownBar;