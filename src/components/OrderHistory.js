import React, { Component } from 'react'
import axios from 'axios';
import M, { Timepicker } from 'materialize-css';

class OrderHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
            // orderId: "",
            // orderName:"", 
            // orderPrice:Number,
            // orderQuantity:Number,
            // orderTime: ,
            // orderTotal: Number,
        }   
    }
    componentDidMount() {   
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        var i = 0;
        axios.get('./data.json')
            .then(resp => {
                //console.log(resp);
                // ab upr ki state me jo orders hai 
                // usme apan json wala data daalre
                this.setState({
                    orders: resp.data
                })
            })
    }
    render(i) {
        return (
            <div>
                <div className="  container section z-depth-5 blue-grey lighten-4  " >
                    <h2 className="center-align ">Your Order History</h2>
                    <table className="highlight">
                        <thead>
                            <tr>
                                <th>Order Number</th>
                                <th>Category</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map((item) => {
                                return <tr>
                                    <td className="center">{item.orderno}</td>
                                    <td>{item.category}</td>
                                    <td>{item.itemname}</td>
                                    <td>{item.itemprice}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.total}</td>
                                    <td>{item.time}</td>
                                </tr>;
                            })}
                        </tbody>
                    </table>
                    <h3 className="right-align">Total= 220/-</h3>
                </div >
            </div >
        )
    }
}

export default OrderHistory
