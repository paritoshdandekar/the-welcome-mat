import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import M from 'materialize-css';

class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div>
                        <div className="navbar">
                            <nav className="cyan darken-4">
                                <div className="nav-wrapper container" >
                                    <Link to="/" className="brand-logo" style={{ fontFamily: "Lobster" }}>The Welcome Mat</Link>
                                    <a href="#" data-target="mobile-demo" class=" sidenav-trigger" ><i class="material-icons">menu</i></a>
                                    <ul className="right hide-on-med-and-down"> 
                                        <li><Link to="/Home">Home</Link></li>
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Order">Orders</Link></li>
                                        <li><Link to="/Profile">Profile</Link></li>
                                    </ul>
                                </div>
                            </nav>
                            <ul class=" sidenav " id="mobile-demo" >
                                <li><Link to="/Home">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Order">Orders</Link></li>
                                <li><Link to="/Profile">Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Navbar
