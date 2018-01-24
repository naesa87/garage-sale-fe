import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./header/Navbar";
import Listings from "./Listings/Listings"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { listings : [] }

  }

  componentDidMount() {
   axios.get('http://localhost:4000/api/auctions')
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
      console.log("LISTING");
      console.log(this.state.listings);
    return (
      <div className="App">
        <Navbar/>
        <Listings listingss={this.state.listings}/>
      </div>
    );
  }
}

export default App;
