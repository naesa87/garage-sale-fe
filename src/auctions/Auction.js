import React, {Component} from 'react';
import logo from './portraitImage.jpg';

export default class Auction extends Component {
    render() {
        return (
            <div className="col-md-5 auction">
                <div className="auction-upper">
                    <div className="auction-heading">
                        <img src={logo} className="auction-image"/>
                        <h2> {this.props.auction.title} </h2>
                        <p> {this.props.auction.serialNumber} </p>
                    </div> 
                    <p className="auction-price"> {this.props.auction.price} <span className="currency">AUD</span> </p>
                </div>
                <div className="auction-content">
                <h4>Specs</h4>
                    <p> {this.props.auction.specs} </p>
                    <h4>Condition</h4>
                    <p> {this.props.auction.condition} </p>
                    <h4>Location</h4>
                    <p> {this.props.auction.location} </p>
                </div>
                <button className="auction-btn">Buy Now</button>
            </div>
        )
    }
}
