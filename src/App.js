import React, { Component } from 'react';
import './App.css';
import Navbar from "./header/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>HOLA</p>
      </div>
    );
  }
}

export default App;
