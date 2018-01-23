import React, { Component } from 'react';
import './App.css';
import Navbar from "./header/Navbar";
import Listings from "./Listings/Listings"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Listings/>
      </div>
    );
  }
}

export default App;
