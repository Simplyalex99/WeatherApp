import React, { Component } from 'react';
//import './server.js'; Module not found when imported could be directory path ../ / 
import './App.css';
import defaultImage from './MountainImages/img1.png';
import Title from './TitlePage.js';
import SearchButton from './SearchBar.js';
import Footer from './Footer.js';
import Background from './BackgroundContent.js';
class App extends Component{

  state = {


  }


componentDidMount(){





}

render() {
  return (
<div className = "container">
   <Title/>

   <Background/>

   <SearchButton/>

   <Footer/>
</div>    
  );
 }
}
export default App;
