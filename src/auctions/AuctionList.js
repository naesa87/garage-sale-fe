import React, {Component} from 'react';
import Auction from "./Auction"
import './AuctionList.css';
import axios from "axios/index";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';


export default class AuctionList extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            auctionList: []
        }
    }

    componentWillMount() {
        this.setState({
            isLoading: true
        });
        axios.get(BASE_URL + "/auctions")
            .then(this.setData.bind(this))
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                this.setState({isLoading: false});
            })
    }

    setData(response) {
        this.setState({
            auctionList: response
        })
    }

    render() {
        if(this.state.isLoading){
            return null
        }
        let content = "No Auctions";
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
}