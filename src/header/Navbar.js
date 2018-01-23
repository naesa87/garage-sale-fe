import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Create Listing</a>
                        </li>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;