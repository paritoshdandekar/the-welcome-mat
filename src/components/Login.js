import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';

export class Login extends Component {
    constructor(props) {
        super(props)
        
                this.state = {
                    username: '',
                    password: '',
                    users:[],
                    final:''
                }
        }

    componentDidMount() {   
       var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:5000/user/find',login)
            .then(resp => {
                this.state.final = resp.data[0]._id;
                // this.setState({
                //     users: resp.data
                // })
                // {this.state.users.map((item) => {
                //     console.log(item.username)
                // })}
                // const last = this.state.users[0].slice();

                console.log(this.state.final)
                this.props.history.push("/food/",{userId: this.state.final})
            });
        // alert(`${this.state.users[0].username}`+ `${this.state.username}` + " " +`${this.state.password}` + "  User Welcome" +`${this.state.userId}`)
        // alert("  okay "+ this.state.users[0].username)
        this.setState = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="row">
                <div className="cols12 m6">
        
                <div class="container section z-depth-4 blue-grey lighten-5">
                <div className="col s6 m4 l8 push-l3 push-m1">
                
                
                    <form class="col s12 m12" onSubmit={this.submitHandler}>
                         <h4 >Login Here!</h4>
                            <div class="input-field col s6">
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" value={this.username} name='username' onChange={this.changeHandler}></input>
                                                <label for="username">Email</label>
                                    </div>
                                </div>    
                                    
                                    <div class="row">
                                        <div class="input-field col s12">
                                        <input id="password" type="password" class="validate" value={this.password} name='password' onChange={this.changeHandler}></input>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                <div className="center">
                                    <button className="btn-small">Login</button>
                                </div>
                            </div>
                       
                    </form>
                
                        
            </div>
            </div>
            </div>
        </div>
        )
    }

}
export default Login
