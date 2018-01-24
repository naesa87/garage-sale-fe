import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/create-listing'} className="nav-link">Create Listing</Link>
                        </li>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;