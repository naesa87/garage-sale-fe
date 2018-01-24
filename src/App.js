import React, {Component} from 'react';
import './App.css';
import Navbar from "./header/Navbar";
import Listings from "./Listings/Listings";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateListing from "./create_listing/CreateListing";


class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Listings}/>
                        <Route exact path='/create-listing' component={CreateListing}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
