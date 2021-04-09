import React, { Component } from 'react';
import M from 'materialize-css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../Login.css'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
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
        const Login = {
            username: this.state.username,
            password: this.state.password,
        }
        alert(`${this.state.username}` + " " + `${this.state.password}` + "  User Welcome")
        this.setState = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div >
                <img src="../images/login1.jpg" className="banner-img"/>
                
                <div className="row ">
                    <div class="banner-text">
                    <div className="col s6 ">
                            <a className="brand-logo" style={{ fontFamily: "Lobster",color:"black", fontSize: "50px" }}>The Welcome Mat</a>
                            <h5>Come in as guests, leave as a family...</h5>
                    </div>
                    
                    {/* <div className="col s6 m4 l8 push-l3 push-m1"> */}
                    <div className="col s6 z-depth-5 loginform" >

                        {/* <div class="container section z-depth-4 blue-grey lighten-5"> */}
                        <form  onSubmit={this.submitHandler}>
                            {/* <div class="input-field"> */}
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="username" type="email" class="validate" value={this.username} name='username' onChange={this.changeHandler}></input>
                                        <label for="username" class="texta" class="black-text bold">Email</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate" value={this.password} name='password' onChange={this.changeHandler}></input>
                                        <label for="password" class="texta" class="black-text">Password</label>
                                    </div>
                                </div>
                                <div className="center section">
                                    <button className="btn-small">Login</button>
                                </div>
                            {/* </div> */}

                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
           
         

        )
    }

}
export default Login
