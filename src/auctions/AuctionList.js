import React, { Component } from 'react';
import Auction from "./Auction"
import './AuctionList.css';
import axios from "axios/index";
import _ from 'lodash'
import {withAuth} from '@okta/okta-react';
import {checkAuthentication} from "../auth/Helpers";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';


export default withAuth(class AuctionList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            auctionList: [],
            authenticated: null
        }
        this.checkAuthentication = checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async componentDidMount() {
        try {
            var config = {
                headers: {
                    Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
                }
            }
            await axios.get(BASE_URL + "/auctions",config)
                .then(this.setData.bind(this))
                .then(() => {
                    this.setState({isLoading: false});
                })
                .catch(function (error) {
                    console.log(BASE_URL);
                    console.log(error);
                });
        } catch (err) {
            // handle error as needed
        }
    }

    componentWillMount() {
        this.setState({
            isLoading: true
        });
        axios.get(BASE_URL + "/auctions")
            .then(this.setData.bind(this))
            .then(() => {
                this.setState({ isLoading: false });
            })
            .catch(function (error) {
                console.log(BASE_URL);
                console.log(error);
            })

    }

    setData(response) {
        this.setState({
            auctionList: response
        })
    }

    render() {
        if (this.state.authenticated === null) return null;
        if (this.state.isLoading) {
            return null
        }
        if (this.state.authenticated) {

        }
        let availableListings = [];
        let soldListings = [];
        if (this.state.auctionList !== undefined && this.state.auctionList.data !== undefined) {
            this.state.auctionList.data.data.map((auction) => {
                if (auction.is_sold) {
                    soldListings.push(<Auction auction={auction} key={auction.id} />);
                    _.reverse(soldListings);
                }
                else {
                    availableListings.push(<Auction auction={auction} key={auction.id} />);
                    _.reverse(availableListings)
                }

            });

        }
        const hasSoldListings = !_.isEmpty(soldListings);
        const hasAvailableListings = !_.isEmpty(availableListings);
        return (

            <div className="container auction-list">

                {hasAvailableListings ?
                    (<div>
                        <div className="row justify-content-around">
                            <h4> Available Listings </h4>
                        </div>
                        <div className="row justify-content-around">
                            {availableListings}
                        </div>
                    </div>) :
                    (<div className="no-available-listings">
                        <div className="row justify-content-around">
                            <h4> No Available Listings </h4>
                        </div>
                    </div>)
                }

                {hasSoldListings ?
                    (<div >
                        <div className="row justify-content-around">
                            <h4> Sold Listings </h4>
                        </div>
                        <div className="row justify-content-around">
                            {soldListings}
                        </div>

                    </div>) : ""
                }


            </div>

        )
    }
});