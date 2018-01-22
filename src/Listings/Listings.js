import React, { Component } from 'react';
import Listing from "./Listing"
import './Listings.css';


export default class Listings extends Component {

    render() {
        const listings = [
            {
                title: "datasdffsadfasdfaa1",
                serialNumber: "01010110",
                condition: "fantastic",
                specs: "pretty good",
                location: "Brisbane",
                price: "$100"
            },
            {
                title: "data2",
                serialNumber: "01010110 2",
                condition: "fantastic2",
                specs: "pretty good2",
                location: "Brisbane2",
                price: "$1002"
            },
            {
                title: "data3",
                serialNumber: "01010110 3",
                condition: "fantastic3",
                specs: "pretty good3",
                location: "Brisbane3",
                price: "$1003"
            },
            {
                title: "data4",
                serialNumber: "01010110 4",
                condition: "fantastic4",
                specs: "pretty good4",
                location: "Brisbane4",
                price: "$1004"
            }
        ];
        return (
        <div>
            <div className="row">
                <Listing listing={listings[0]}/>
                <Listing listing={listings[1]}/>
            </div>
            <div className="row">
                <Listing listing={listings[2]}/>
                <Listing listing={listings[3]}/>
            </div>
        </div>

        )
    }
}

