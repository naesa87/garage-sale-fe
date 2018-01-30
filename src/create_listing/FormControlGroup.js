import React, { Component } from 'react';

const FormControlGroup = (props) => {  
    return (
        <div className="control-group">
        <label htmlFor={props.name}>{props.label}</label>
        <div className="controls">
            <input type={props.isNumeric ? "number" : "text"} onChange={props.change} value={props.value} name={props.name} id={props.name} className={`form-control ${props.errors[props.name] ? "is-invalid" : ""}`}/>
        </div>  
    </div> 
    )
};

export default FormControlGroup;