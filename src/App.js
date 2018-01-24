import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./header/Navbar";
import Listings from "./Listings/Listings"

class App extends Component {

  constructor(props) {
    super(props);

    axios.get('http://localhost:4000/api/auctions')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }
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
