import React, { Component } from 'react';
import axios from "axios/index";
import "./ConfirmPage.css";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';

export default class ConfirmPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submissionPassed: false,
            submissionFailed: false,
            listing: {}
        }
    }

    renderNotification = () => {
        if (this.state.submissionFailed) {
            return (
                <div className="alert alert-danger" role="alert"> Network Error. Please try again </div>
            )
        }
    }

    commitPurchase = () => {
        const itemId = this.props.match.params.id;
        axios.put(BASE_URL + "/auctions/" + itemId, { auction: { is_sold: true } })
            .then((result) => {
                this.setState({
                    submissionPassed: true
                });
            }).catch((error) => {
                console.log(error)
                this.setState({
                    submissionFailed: true
                });
            });
    }

    componentWillMount() {
        axios.get(BASE_URL + "/auctions/" + this.props.match.params.id)
            .then((response) => {
                this.setState({ listing: response.data.data })
            })
            .catch(function (error) {
                console.log(BASE_URL);
                console.log(error);
            })

    }


    render() {
        if (this.state.submissionPassed) {
            return (
                <div className="container confirm-page">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 confirmation-message">
                            <div className="item-details">
                                <span className="bold"> Purchase Confirmed </span>
                            </div>
                            <div className="instructions">
                                <p> An email is on its way to your inbox.</p>
                                <p> If you don't receive the email within 24 horus, email Dan Gower (dgower@thougthworks.com) </p>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        const { title, serial_number, price } = this.state.listing;
        return (
            <div className="container confirm-page">
                <div className="row justify-content-md-center">
                    <div className="col-md-8 confirmation-message">
                        {this.renderNotification()}
                        <p> You are purchasing: </p>
                        <div className="item-details">
                            <span className="bold"> {title} </span>
                            <span className="uppercase"> ({serial_number}) </span> for
                            <span className="bold"> ${price} </span>
                        </div>
                        <div className="instructions">
                            <p> By clicking "Confirm Purchase", you are committing to purchase
                            this item. You'll get an email with how to make payment and arrange shipping
                            if needed
                            </p>
                        </div>
                        <button className="btn-purchase btn-primary btn" onClick={this.commitPurchase}> Confirm Purchase </button>
                    </div>
                </div>
            </div>
        );
    }

}