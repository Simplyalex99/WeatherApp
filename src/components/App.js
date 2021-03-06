import React, { Component } from "react";
//import './server.js'; Module not found when imported could be directory path ../ /
import "../styles/App.css";

import Title from "./TitlePage.js";
import SearchButton from "./SearchBar.js";
import Footer from "./Footer.js";
import Background from "./BackgroundContent.js";
class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="image-container">
        <Title />

        <Background />

        <SearchButton />

        <Footer />
      </div>
    );
  }
}
export default App;
