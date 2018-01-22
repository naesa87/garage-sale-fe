import React, { Component } from 'react';
import './App.css';
import Navbar from "./header/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <button type="button" className="btn btn-primary">Buy me</button>
      </div>
    );
  }
}

export default App;
