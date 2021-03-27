import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';

class Adduser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username:'',
            checkin:'',
            checkout:'',
            room:''
        }}
        componentDidMount() {

            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {});
            var elems1 = document.querySelectorAll('select');
            M.FormSelect.init(elems1, {});
        }
        changeHandler = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        submitHandler = e => {
            const User ={
            username:this.state.username,
            checkin:this.state.checkin,
            checkout:this.state.checkout,
            room:this.state.room,
            }
           alert(`${this.state.username}`+`${this.state.checkin}`+`${this.state.checkout}`+`${this.state.room}`+"Added New User")
        this.setState = {
            username:'',
            checkin:'',
            checkout:'',
            room:''
        }
    }

    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5">
                <div className="row">
                    <div className="col s12 m10 l6 push-l3 push-m1">
                        <h3 className="center-align"> Add New Users Details</h3>
                    
                        <form onSubmit={this.submitHandler} >
                        
                        
                                <div className="row section">

                                    <div className="row">
                                    <p><h6>User Name</h6></p>
                                        <div className="input-field col s12 section">
                                            <input id="username" type="text" value={this.username} name='username' onChange={this.changeHandler} className="validate"></input>


                                            <label for="username"> Username here</label>
                                        </div>
                                        <p><h6>Check-in Date</h6></p>
                                        <div className="input-field col s12 section">
                                            <input id="checkin" type="text" value={this.checkin} name='checkin' onChange={this.changeHandler} className="validate"></input>


                                            <label for="checkin"> DD/MM/YYYY Checkin Date here</label>
                                        </div>
                                        <p><h6>Check-out Date </h6></p>
                                        <div className="input-field col s12 section">
                                            <input id="checkout" type="text" value={this.checkout} name='checkout' onChange={this.changeHandler} className="validate"></input>


                                            <label for="checkout"> DD/MM/YYYY Check-out date here</label>
                                        </div>
                                        <p><h6>Room Number</h6></p>
                                        <div className="input-field col s12 section">
                                            <input id="room" type="text" value={this.room} name='room' onChange={this.changeHandler} className="validate"></input>


                                            <label for="room">Room Number here</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <button className="btn-small">Submit</button>
                                </div>
                            
                        
                        
                        
                        
                        
                        </form>
                        </div>
                        </div>
            </div>
        )
    }
}


export default Adduser
