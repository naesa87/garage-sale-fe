import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <p className="navbar-brand navbar-name">G'day Chandler</p>
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item" id="manage-listings">
                            <Link to={'/'} className="nav-link">Manage Listings</Link>
                        </li>
                        <li className="nav-item" id="create-listings">
                            <Link to={'/create-listing'} className="nav-link">Create Listing</Link>
                        </li>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;