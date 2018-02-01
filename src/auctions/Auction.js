import React, {Component} from 'react';
import defaultLogo from './portraitImage.jpg';
import Lightbox from 'react-image-lightbox';
import _ from 'lodash';
import {Link} from 'react-router-dom';

export default class Auction extends Component {


    constructor(props){
        super(props);

        if(_.isEmpty(props.auction.images.data)){
            this.images = [defaultLogo]
        }else {
            this.images = props.auction.images.data.map((image) => {return image.rawImageData})
        }
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    renderImg(images) {
        return (images.length > 0)
            ? images[0].rawImageData
            : defaultLogo ;
    }

    renderImgCount() {
        console.log("ASDASDSA")
        console.log(this.images.length)
        if(this.images.length === 1 ){
           return "";
        }
        return ( <div> 1 of {this.images.length} </div>)
    }

    renderButton() {
        if(this.props.auction.is_sold) {
            return (
                <div className="sold auction-btn"> SOLD </div>
            )
        }
       return <Link to={{pathname: `/confirm-page/${this.props.auction.id}`, state: {auction: this.props.auction}}} className="auction-btn">Buy Now</Link>
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        const images = this.images;
        return (
            <div className="col-md-5 auction">
                <div className="auction-upper">
                    <div>
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={ images.length >1 ? images[(photoIndex + 1) % images.length] : undefined}
                                prevSrc={ images.length >1 ? images[(photoIndex + images.length - 1) % images.length] : undefined}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}
                    </div>
                    <div className="auction-heading">
                        <div className="image-container">
                            <img src={this.renderImg(this.props.auction.images.data)} className="auction-image row" alt="Auction" type="button" onClick={() => this.setState({ isOpen: true })}/>
                            <div className="image-count row">{this.renderImgCount()}</div>
                        </div>
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
                {this.renderButton()}
            </div>
        )
    }
}
