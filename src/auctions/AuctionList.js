import React, {Component} from 'react';
import Auction from "./Auction"
import './AuctionList.css';
import axios from "axios/index";
import {withAuth} from '@okta/okta-react';
import {authClient} from "../auth/Httpclient";
import {checkAuthentication} from "../auth/Helpers";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';


export default withAuth(class AuctionList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            auctionList: [],
            authenticated: null
        }
        this.checkAuthentication = checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    async componentDidMount() {
        try {
            var config = {
                headers: {
                    Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
                }
            }
           await axios.get(BASE_URL + "/auctions",config)
                .then(this.setData.bind(this))
                .then(() => {
                    this.setState({isLoading: false});
                })
                .catch(function (error) {
                    console.log(BASE_URL);
                    console.log(error);
                });
        } catch (err) {
            // handle error as needed
        }
    }

    async componentWillMount() {
        this.setState({
            isLoading: true
        });

    }

    setData(response) {
        this.setState({
            auctionList: response
        })
    }

    render() {
        if (this.state.authenticated === null) return null;
        if (this.state.isLoading) {
            return null
        }
        let content = "No Auctions";
        if (this.state.authenticated) {

        }
        if (this.state.auctionList !== undefined && this.state.auctionList.data !== undefined) {
            content = this.state.auctionList.data.data.map((auction) =>
                (<Auction auction={auction} key={auction.id}/>)
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
});