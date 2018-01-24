import React, {Component} from 'react';
import logo from './portraitImage.jpg';

export default class Auction extends Component {
    render() {
        return (
            <div className="col-md-5 listing">
                <div className="listing-upper">
                    <div className="listing-heading">
                        <img src={logo} className="listing-image"/>
                        <h2> {this.props.listing.title} </h2>
                        <p> {this.props.listing.serialNumber} </p>
                    </div> 
                    <p className="listing-price"> {this.props.listing.price} <span className="currency">AUD</span> </p>
                </div>
                <div className="list-content">
                <h4>Specs</h4>
                    <p> {this.props.listing.specs} </p>
                    <h4>Condition</h4>
                    <p> {this.props.listing.condition} </p>
                    <h4>Location</h4>
                    <p> {this.props.listing.location} </p>
                </div>
                <button className="listing-btn">Buy Now</button>
            </div>
        )
    }
}
