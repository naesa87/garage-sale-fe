import React, {Component} from 'react';
import axios from "axios/index";
import './CreateListing.css';
import FileBase64 from 'react-file-base64';
import _ from 'lodash';
import FormControlGroup from './FormControlGroup';

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
            price:0,
            files: [],
            errors: []
        };
    }

    getFiles(files){
        this.setState({ files: files });
        console.log(this.state.files);
    }

    onSubmit = (e) => {
        e.preventDefault();
        var errors = this.validate();
        console.log(this.refs.title);
        if(Object.keys(errors).length !== 0) {
            this.setState({
                errors: errors
            });
            return;
        }
        axios.post(BASE_URL + "/auctions", { auction: this.state })
            .then((result) => {
                console.log(result)
                alert("SAVED")
            }).catch(function (error) {
            console.log(error);
            alert("BOOOHOOOO")
        });
    }

    validate = () => {
    var errors = {} 
    if (this.state.title === "" || this.state.title.trim() === "") {
        errors.title = "Title is required";
    }
    if (this.state.serial_number === "" || this.state.serial_number.trim() === "") {
        errors.serial_number = "Serial Number is required";
    }
    if (this.state.price === 0 || this.state.price < 0) {
        errors.price = "Price must be greater than 0";
    }
    if (this.state.condition === "" || this.state.condition.trim() === "") {
        errors.condition = "Condition is required";
    }
    if (this.state.spec === "" || this.state.spec.trim() === "") {
        errors.spec = "Spec is required";
    }
    if (this.state.location === "" || this.state.location.trim() === "") {
        errors.location = "Location is required";
    }
    return errors;
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    renderSelectedImgList = () => {
        const imageListHtml = _.map(this.state.files, (file) => {
            return (
                <div className="row"> {file.name} </div>
            )
        });
        return imageListHtml;
    }

    render() {
        const { location, spec, condition, serial_number, title, price, errors } = this.state;
        return (
            <div className="container">
            <h3 className="create-listing-heading col-md-8"> Create Listing</h3>
            <p className="create-listing-hint col-md-8"> Hint: Reference "About this Mac" on the machine you want to sell for assistance
            with the following details. All fields are required.
            </p>
                <form onSubmit={this.onSubmit.bind(this)} id="form1" noValidate>
            
                    <div className="form-group col-md-8">

                        <FormControlGroup label="Title" value={title} errors={errors} change={this.onChange} name="title"/>
                        <FormControlGroup label="Serial Number" value={serial_number} errors={errors} change={this.onChange} name="serial_number"/>
                        <FormControlGroup label="Price" value={price} errors={errors} change={this.onChange} name="price"/>
                        <FormControlGroup label="Specifications" value={spec} errors={errors} change={this.onChange} name="spec"/>
                      
                        <div className="control-group">  
                        <div> 
                            <label htmlFor="condition">Condition (200 characters max)</label> 
                        </div>
                            <div className="controls textarea_wrapper">
                                <textarea  id="condition-text-area" onChange={this.onChange} rows="3" type="text" maxLength="200" value={condition} name="condition" id="condition" className={`form-control ${errors.condition ? "is-invalid" : ""}`}/>
                            </div>
                        </div>
                      
                        <FormControlGroup label="Location" value={location} errors={errors} change={this.onChange} name="location"/>
                        
                        <div className="control-group">
                            <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
                            {this.renderSelectedImgList()}
                        </div>


                        <button type="submit" className="mb-4 btn btn-primary">Post Listing</button>
                    </div>
                </form>
            </div>
        );
    }
}