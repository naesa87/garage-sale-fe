import React, {Component} from 'react';
import axios from "axios/index";
import './CreateListing.css';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';


// https://blog.stvmlbrn.com/2017/04/07/submitting-form-data-with-react.html
// http://blog.revathskumar.com/2015/07/submit-a-form-with-react.html
export default class CreateListing extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            location:"",
            spec:"",
            condition:"",
            serial_number:"",
            title:"",
            price:0
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(BASE_URL + "/auctions", { auction: this.state })
            .then((result) => {
                console.log(result)
                alert("SAVED")
            }).catch(function (error) {
            console.log(error);
            alert("BOOOHOOOO")
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        const { location, spec, condition, serial_number, title, price } = this.state;

        return (
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)} id="form1">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                    <input onChange={this.onChange} value={title} name="title" id="title" class="form-control"/>
                    <label htmlFor="serial_number">Serial Number</label>
                    <input onChange={this.onChange} value={serial_number} name="serial_number" id="serial_number" class="form-control"/>
                    <div class="control-group">
                        <label htmlFor="price">price</label>
                        <div class="controls">
                            <input onChange={this.onChange} type="number" value={price} name="price" id="price" class="form-control"/>
                        </div>                    
                    </div>
                    <label htmlFor="condition">Condition</label>
                    <input onChange={this.onChange} value={condition} name="condition" id="condition" class="form-control"/>
                    <label htmlFor="spec">Spec</label>
                    <input onChange={this.onChange} value={spec} name="spec" id="spec" class="form-control"/>
                    <label htmlFor="location">Location</label>
                    <input onChange={this.onChange} value={location} name="location" id="location" class="form-control"/>
                    <button type="submit" className="mb-4 btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}