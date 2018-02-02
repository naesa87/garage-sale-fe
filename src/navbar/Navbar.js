import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <p className="navbar-brand navbar-name">G'day Chandler</p>
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item basic-nav-item" id="view-listings">
                            <NavLink exact to={'/'} className="nav-link" activeClassName="selected">View Listings</NavLink>
                        </li>
                        <li className="nav-item basic-nav-item" id="manage-listings">
                            <NavLink to={'/manage-listings'} className="nav-link" activeClassName="selected">Manage Listings</NavLink>
                        </li>
                        <li className="nav-item" id="create-listings">
                            <NavLink to={'/create-listing'} className="nav-link" activeClassName="selected">Create Listing</NavLink>
                        </li>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;