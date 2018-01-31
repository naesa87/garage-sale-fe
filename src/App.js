import React, {Component} from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import AuctionList from "./auctions/AuctionList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateListing from "./create_listing/CreateListing";
import ManageListings from "./manage_listings/ManageListings"
import ConfirmPage from "./confirm_page/ConfirmPage";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={AuctionList}/>
                        <Route exact path='/manage-listings' component={ManageListings}/>
                        <Route exact path='/create-listing' component={CreateListing}/>
                        <Route exact path='/confirm-page/:id' component={ConfirmPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
