import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export class Sidenav extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
                <div>
                    <ul id="mobile-demo" className="sidenav sidenav-fixed">
                        <li><a href="#!" >Live Activity</a></li>
                        <li><a href="#!" >Statistics</a></li>
                        <li><a className="#!" >Add User</a></li>
                        <li><a className="#!" >Change Menu</a></li>
                        <li><a className="#!" >Show User</a></li>
                        <li><a className="#!" >Billing of Order History</a></li>

                    </ul>

                </div>
        )
    }
}

export default Sidenav
