import React, {Component} from 'react';
import logo from './portraitImage.jpg';

class Listing extends Component {
    render() {
        return (
            <div className="col-md-5 listing">
                <div className="listing-upper">
                    <img src={logo} className="listing-image"/>
                    <div className="listing-heading">
                        <h2> {this.props.listing.title} </h2>
                        <p> {this.props.listing.serialNumber} </p>
                    </div> 
                    <p className="listing-price"> {this.props.listing.price} </p>
                </div>
                <div className="list-content">
                    <p> {this.props.listing.specs} </p>
                    <p> {this.props.listing.condition} </p>
                    <p> {this.props.listing.location} </p>
                </div>
            </div>
        )
    }
}

export default Listing;