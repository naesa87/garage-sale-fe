import React, {Component} from 'react';
import defaultLogo from './portraitImage.jpg';

export default class Auction extends Component {

    renderImg(images) {
        return (images.length > 0)
            ? images[0].rawImageData
            : defaultLogo ;
    }

    render() {
        return (
            <div className="col-md-5 auction">
                <div className="auction-upper">
                    <div className="auction-heading">
                        <img src={this.renderImg(this.props.auction.images.data)} className="auction-image" alt="Auction"/>
                        <h2> {this.props.auction.title} </h2>
                        <p> {this.props.auction.serial_number} </p>
                    </div> 
                    <p className="auction-price"> ${this.props.auction.price} <span className="currency">AUD</span> </p>
                </div>
                <div className="auction-content">
                <h4>Specs</h4>
                    <p> {this.props.auction.spec} </p>
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
