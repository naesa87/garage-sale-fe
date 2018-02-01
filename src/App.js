import React, {Component} from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import AuctionList from "./auctions/AuctionList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateListing from "./create_listing/CreateListing";
import ManageListings from "./manage_listings/ManageListings"
import ConfirmPage from "./confirm_page/ConfirmPage";
import { Security, SecureRoute, ImplicitCallback, Auth } from '@okta/okta-react';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const auth = new Auth({
    history,
    issuer: 'https://dev-120266.oktapreview.com/oauth2/default',
    client_id: '0oadui1n22Yv3TWEj0h7',
    redirect_uri: 'http://localhost:3000' + '/implicit/callback',

});


class App extends Component {

    render() {
        return (
            <Router history={history}>
                <Security auth={auth} >
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <SecureRoute exact path='/' component={AuctionList}/>
                        <Route exact path='/manage-listings' component={ManageListings}/>
                        <SecureRoute exact path='/create-listing' component={CreateListing}/>
                        <SecureRoute exact path='/confirm-page/:id' component={ConfirmPage}/>
                        <Route path='/implicit/callback' component={ImplicitCallback} />
                    </Switch>
                </div>
            </Security>
            </Router>
        );
    }
}

export default App;
