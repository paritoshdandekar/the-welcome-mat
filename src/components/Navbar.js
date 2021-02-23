import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="cyan darken-4">
                        <div className="nav-wrapper container">
                            <Link to="/" className="brand-logo" style={{ fontFamily: "Lobster" }}>The Welcome Mat</Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/Home">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
