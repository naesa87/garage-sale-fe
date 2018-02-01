import React, { Component } from 'react';
import axios from "axios/index";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';

export default class ConfirmPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submissionPassed: false,
            submissionFailed: false
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
        axios.put(BASE_URL + "/auctions/" + itemId, { auction: { is_sold: true}})
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

    render() {
        if (this.state.submissionPassed) {
            return ( <div>COMPLETE YEH</div>)
        }
        return (
            <div>
                {this.renderNotification()}
                <div> Hello </div>
                <button onClick={this.commitPurchase}> Confirm Purchase </button>
            </div>
        );
    }

}