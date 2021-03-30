import React, { Component } from 'react'
import axios from 'axios';
import M from 'materialize-css';

class Adminpanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodOrders: [],
            laundryOrders: [],
            houseKeepingOrders: [],
            supportOrders: [],
            internetOrders: [],

        }

    }
    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});

        // axios.get('./menu.json')
        //     .then(resp => {
        //         this.setState({
        //             menus: resp.data
        //         })
        //     })


        axios.get('http://localhost:5000/laundary/')
            .then(resp => {
                this.setState({
                    laundryOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/housekeeping/')
            .then(resp => {
                this.setState({
                    houseKeepingOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/support/')
            .then(resp => {
                this.setState({
                    supportOrders: resp.data
                })
            });

        axios.get('http://localhost:5000/internet/')
            .then(resp => {
                this.setState({
                    internetOrders: resp.data
                })
            });

    }




    render() {
        return (

            <div className="section">
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div className="card light-blue">
                            <div className="card-content white-text">
                                <span className="card-title">Total Customers</span>
                                <p>Customers served till date:<br></br><br></br><br></br></p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card orange lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Requests</span>
                                <p>
                                    <ul>
                                        <li>Completed requests:</li>
                                        <li>Pending requests:</li>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="col s12 m4 l4">
                        <div className="card  pink accent-2">
                            <div className="card-content white-text">
                                <span className="card-title">Revenue</span>
                                <p>Total Revenue earned : Rs<br></br><br></br><br></br></p>
                            </div>

                        </div>
                    </div>


                </div>
                <div class="card">
                    <div class="card-content">
                        <p><h4 style={{ fontFamily: "Lobster" }}><u>Live Stats</u></h4></p>
                    </div>
                    <div class="card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a href="#food">Food</a></li>
                            <li class="tab"><a href="#laundary">Laundary</a></li>
                            <li class="tab"><a href="#housekeep">Housekeeping</a></li>
                            <li class="tab"><a href="#support">Support And Maintaince</a></li>
                            <li class="tab"><a href="#internet">Internet</a></li>
                        </ul>
                    </div>
                    <div class="card-content grey lighten-4">
                        <div id="food">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Order Name</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                        <td>ahdsau</td>
                                        <td>asdsa</td>
                                        <td>    </td>
                                        <td>11</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div id="laundary">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Quantity</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.laundryOrders.map((item) => {
                                        return <tr>
                                            <td></td>
                                            <td></td>
                                            <td >{item.laundaryTask[0]},{item.laundaryTask[1]},{item.laundaryTask[2]}</td>
                                            <td>{item.laundaryclothCount}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            <td>{item.status}</td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div id="housekeep">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.houseKeepingOrders.map((item) => {
                                        return <tr>
                                            <td></td>
                                            <td></td>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            <td>{item.status}</td>
                                            {/* <td>{item.time}</td> */}

                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div id="support">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.supportOrders.map((item) => {
                                        return <tr>
                                            <td></td>
                                            <td></td>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            <td>{item.status}</td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div id="internet">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Room Number</th>
                                        <th>Task</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.internetOrders.map((item) => {
                                        return <tr>
                                            <td>laundary</td>
                                            <td>asasa</td>
                                            <td >{item.data}</td>
                                            <td>{item.createdAt.substring(11,19)}</td>
                                            <td>{item.createdAt.substring(0,10)}</td>
                                            <td>{item.status}</td>
                                            {/* <td>{item.time}</td> */}
                                        </tr>;
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default Adminpanel
