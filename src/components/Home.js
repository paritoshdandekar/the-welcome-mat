import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="grey lighten-4">
            <div className="container section">                
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card small hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" alt="card" src="../images/food.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Order Food<i className="material-icons right">more_vert</i></span>
                                <Link to="/food" class="btn-floating waves-effect waves-light pulse red right"><i class="material-icons">arrow_right_alt</i></Link>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Order Food<i className="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4">
                        <div className="card small hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator responsive-img" alt="card" src="../images/laundry.jfif" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Laundry<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://www.google.com">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Laundry<i className="material-icons right">close</i></span>
                                <p className="flow-text">Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4">
                        <div className="card small hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator responsive-img" alt="card" src="../images/hk2.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Housekeeping<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://www.google.com">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Housekeeping<i className="material-icons right">close</i></span>
                                <p className="flow-text">Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4 push-l2">
                        <div className="card small hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator responsive-img" alt="card" src="../images/support.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Support & Maintenance<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://www.google.com">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Support & Maintenance<i className="material-icons right">close</i></span>
                                <p className="flow-text">Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l4 push-l2">
                        <div className="card small hoverable">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator responsive-img" alt="card" src="../images/internet.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Internet<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://www.google.com">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Internet<i className="material-icons right">close</i></span>
                                <p className="flow-text">Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
            
            </div>

        )
    }
}

export default Home
