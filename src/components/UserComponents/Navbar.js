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
                <div>
                    <div className="navbar">
                        <nav className="cyan darken-4">
                            <div className="nav-wrapper container " >
                                <Link to="/user" className="brand-logo flow-text" style={{ fontFamily: "Lobster"}}><span className="flow-text">The Welcome Mat</span></Link>
                                <a href="#" data-target="mobile-demo" className=" sidenav-trigger" ><i class="material-icons">menu</i></a>
                                <ul className="right hide-on-med-and-down">
                                    <li><Link to="/user">Home</Link></li>
                                    <li><Link to="/user/About">About</Link></li>
                                    <li><Link to="/user/Order">Orders</Link></li>
                                    <li><Link to="/user/Profile">Profile</Link></li>
                                    <li><Link to="/">Logout</Link></li>
                                </ul>
                            </div>
                        </nav>
                        <ul className=" sidenav " id="mobile-demo" >
                            <li><Link to="/user/Home">Home</Link></li>
                            <li><Link to="/user/About">About</Link></li>
                            <li><Link to="/user/Order">Orders</Link></li>
                            <li><Link to="/user/Profile">Profile</Link></li>
                            <li><Link to="/">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>



        )
    }
}

export default Navbar
