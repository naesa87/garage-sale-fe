import React, {Component} from 'react';
import logo from './portraitImage.jpg';

class Listing extends Component {
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
                <h3>Specs</h3>
                    <p> {this.props.listing.specs} </p>
                    <h3>Condition</h3>
                    <p> {this.props.listing.condition} </p>
                    <h3>Location</h3>
                    <p> {this.props.listing.location} </p>
                </div>
                <button className="listing-btn">Buy Now</button>
            </div>
        )
    }
}

export default Listing;