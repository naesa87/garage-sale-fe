import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./header/Navbar";
import Listings from "./Listings/Listings"
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { listings : [] }
  }

  componentDidMount() {

   axios.get(BASE_URL+"/auctions")
          .then(this.setData.bind(this))
          .catch(function (error) {
              console.log(error);
          })
  }

  setData(response) {
      this.setState({
          listings: response
      })
  }

  render() {
      console.log("baseurl")
      console.log(process.env.BASE_URL)
    return (
      <div className="App">
        <Navbar/>
        <Listings listings={this.state.listings}/>
      </div>
    );
  }
}

export default App;
