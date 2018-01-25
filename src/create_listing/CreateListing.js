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

                        <div class="control-group">
                            <label htmlFor="title">Title</label>
                            <div class="controls">
                                <input onChange={this.onChange} value={title} required name="title" id="title" class="form-control"/>
                            </div>
                        </div>

                        <div class="control-group">                    
                            <label htmlFor="serial_number">Serial Number</label>
                            <div class="controls">                        
                                <input onChange={this.onChange} value={serial_number} name="serial_number" id="serial_number" class="form-control"/>
                            </div>
                        </div>

                        <div class="control-group">
                            <label htmlFor="price">price</label>
                            <div class="controls">
                                <input onChange={this.onChange} required type="number" min="0" value={price} name="price" id="price" class="form-control"/>
                            </div>                    
                        </div>
                        
                        <div class="control-group">  
                        <div> 
                            <label htmlFor="condition">Condition</label> 
                                <span id="character-remaining" class="textarea_count"> (200 characters max) </span>
                        </div>
                            <div class="controls textarea_wrapper">
                                <textarea  id="condition-text-area" onChange={this.onChange} rows="3" required type="text" minlength="1" maxlength="200" value={condition} name="condition" id="condition" class="form-control"/>
                            </div>
                        </div>

                        <div class="control-group">                    
                            <label htmlFor="spec">Spec</label>
                            <div class="controls">
                                <input onChange={this.onChange} value={spec} name="spec" id="spec" class="form-control"/>
                            </div>
                        </div>

                        <div class="control-group">
                            <label htmlFor="location">Location</label>
                            <div class="controls">                        
                                <input onChange={this.onChange} value={location} name="location" id="location" class="form-control"/>
                            </div>
                        </div>
                        <button type="submit" className="mb-4 btn btn-primary">Post Listing</button>
                    </div>
                </form>
            </div>
        );
    }
}