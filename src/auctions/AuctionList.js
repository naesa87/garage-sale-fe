import React, { Component } from 'react';
import Auction from "./Auction"
import './AuctionList.css';
import axios from "axios/index";
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';


export default class AuctionList extends Component {

    constructor() {
        super()
        this.state = {listings: []}
    }

    componentDidMount() {

        axios.get(BASE_URL + "/auctions")
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
        let content = "";
        if (this.state.listings !== undefined && this.state.listings.data !== undefined) {
            content = this.state.listings.data.data.map((listing) =>
                (<Auction listing={listing} key={listing.id} />)
            );
        }

        return (
        <div className="container">
            <div className="row justify-content-around">
                {content}
            </div>
        </div>

        )
    }
}

