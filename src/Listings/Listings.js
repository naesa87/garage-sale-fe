import React, { Component } from 'react';
import Listing from "./Listing"
import './Listings.css';


export default class Listings extends Component {

    render() {
        let content = "";
        if (this.props.listings !== undefined && this.props.listings.data !== undefined) {
            content = this.props.listings.data.data.map((listing) =>
                (<Listing listing={listing} key={listing.id} />)
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

