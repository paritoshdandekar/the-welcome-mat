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
                <div className="navbar navbar-fixed">
                    <nav className="cyan darken-4">
                        <div className="nav-wrapper container" >
                            <Link to="/" className="brand-logo" style={{ fontFamily: "Lobster" }}>The Welcome Mat</Link>
                            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                            <ul id="slide-out" class="sidenav sidenav-fixed">
                                <li><a href="#!">First Link</a></li>
                                <li><a href="#!">Second Link</a></li>
                                <li><a class="subheader">Subheader</a></li>
                                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>


        )
    }
}

export default Sidenav
