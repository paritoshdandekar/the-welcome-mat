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
                <ul id="mobile-demo" className="sidenav sidenav-fixed blue-grey darken-4">
                    <nav className="cyan darken-4">
                        <div className="nav-wrapper container" >
                            <Link to="/" className="brand-logo" style={{ fontFamily: "Lobster" , fontSize:"30px"}}>The Welcome Mat</Link>
                        </div>
                    </nav>
                    <div className="side">
                    
                    <li><Link to="/" className="white-text"><i class="material-icons white-text">home</i>Home</Link></li>
                    <li><a href="#!" className="white-text"> <i class="material-icons white-text">show_chart</i>Statistics</a></li>
                    <li><a className="#!"  className="white-text"><i class="material-icons white-text">restaurant_menu</i>Change Menu</a></li>
                    <li><a className="#!"  className="white-text"><i class="material-icons white-text">home</i>Billing of Order History</a></li>
                    <li><Link to="/Adduser"  className="white-text"><i class="material-icons white-text">person_add</i>Add User</Link></li>
                    <li><Link to="/Users" className="white-text"><i class="material-icons white-text">person</i>Show User</Link></li>
                    {/* <li><Link to="/Billing"  className="white-text">Billing of Order History</Link></li>
                        <li><Link to="/Statistics"  className="white-text">Statistics</Link></li> */}
                    {/* <li><Link to="/ChangeMenu"  className="white-text">Change Menu</Link></li> */}
                    </div>
                    
                </ul>

            </div >
        )
    }
}

export default Sidenav
