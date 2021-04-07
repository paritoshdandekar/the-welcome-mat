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
            countc: 0,
            countpr1: 0,
            countcr1: 0,

            countpr2: 0,
            countcr2: 0,

            countpr3: 0,
            countcr3: 0,

            countpr4: 0,
            countcr4: 0,

            countpr5: 0,
            countcr5: 0,

            countrev: 0,


        }


    }
    intervalID;

    state = {
        data: [],
    }
    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        this.getData();
        //this.intervalID = setInterval(this.getData.bind(this), 1000);
        // setInterval(() => { }, 1000);

        // this.interval = setInterval(() => {this.getData}, 1000);

        




        // axios.get('http://localhost:5000/housekeeping/')
        //     .then(resp => {
        //         const cust = resp.data;
        //         const compreq = cust.filter(resp => resp.status === 'Recieved');
        //         const countcr1 = compreq.length;
        //         const compreq1 = cust.filter(resp => resp.status === 'Pending');
        //         const countpr1 = compreq1.length;
        //         this.setState({
        //             houseKeepingOrders: resp.data,
        //             cust,
        //             compreq,
        //             countcr1,
        //             compreq1,
        //             countpr1
        //         })
        //     });

        // axios.get('http://localhost:5000/support/')
        //     .then(resp => {
        //         const cust = resp.data;
        //         const compreq = cust.filter(resp => resp.status === 'Recieved');
        //         const countcr2 = compreq.length;
        //         const compreq1 = cust.filter(resp => resp.status === 'Pending');
        //         const countpr2 = compreq1.length;
        //         this.setState({
        //             supportOrders: resp.data,
        //             cust,
        //             compreq,
        //             countcr2,
        //             compreq1,
        //             countpr2

        //         })
        //     });

        // axios.get('http://localhost:5000/internet/')
        //     .then(resp => {
        //         const cust = resp.data;
        //         const compreq = cust.filter(resp => resp.status === 'Recieved');
        //         const countcr3 = compreq.length;
        //         const compreq1 = cust.filter(resp => resp.status === 'Pending');
        //         const countpr3 = compreq1.length;
        //         this.setState({
        //             internetOrders: resp.data,
        //             cust,
        //             compreq,
        //             countcr3,
        //             compreq1,
        //             countpr3
        //         })
        //     });


    }
    getData = () => {
        // do something to fetch data from a remote API.
        // axios.get('http://localhost:5000/laundary/')
        //     .then(resp => {
        //         //const cust = resp.data;
        //         const countc = resp.data.length;
        //         const cust = resp.data;
        //         const compreq = cust.filter(resp => resp.status === 'Recieved');
        //         const countcr4 = compreq.length;
        //         const compreq1 = cust.filter(resp => resp.status === 'Pending');
        //         const countpr4 = compreq1.length;

        //         this.setState({
        //             laundryOrders: resp.data,
        //             cust,
        //             compreq,
        //             countcr4,
        //             compreq1,
        //             countpr4

        //         })
        //     })

        //     .then(data => {
        //         this.setState({ data: [...data] });
        //         // call getData() again in 5 seconds
        //         this.intervalID = setTimeout(this.getData.bind(this), 1000);
        //       });
        
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }

    // stateChange = (f) => {
    //     const {name, value} = f.target;
    //     this.setState({
    //       [name]: value,
    //     });
    //   }




    render() {
        return (

            <div className="section" >
                <div className="row">
                    <div className="col s12 m6 l4">
                        <div className="card light-blue">
                            <div className="card-content white-text">
                                <span className="card-title">Total Customers</span>
                                <p>Customers served till date:<br></br><br></br></p>
                                <p>{this.state.countc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card orange lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Requests</span>
                                <p>
                                    <ul>
                                        <li>Completed requests:{this.state.countcr1 + this.state.countcr2 + this.state.countcr3 + this.state.countcr4}</li>
                                        <li>Pending requests:{this.state.countpr1 + this.state.countpr2 + this.state.countpr3 + this.state.countpr4}</li>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="col s12 m6 l4">
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
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            <td>
                                                <select>
                                                    <option value={item.status}>{item.status}</option>
                                                    <option ></option>
                                                </select>
                                            </td>
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
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
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
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
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
                                            <td>{item.createdAt.substring(11, 19)}</td>
                                            <td>{item.createdAt.substring(0, 10)}</td>
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
