import React, { Component } from 'react';
import Auction from "./Auction"
import './AuctionList.css';
import axios from "axios/index";
import _ from 'lodash'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';


export default class AuctionList extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            auctionList: []
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
        if (this.state.isLoading) {
            return null
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
}