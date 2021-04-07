import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';
const var2='6063f72e97e05959b477b63c'


export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myuser: [],

            var1: '6063f72e97e05959b477b63c'

        }
    }

    

    componentDidMount() {
var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});

       
        axios.get('http://localhost:5000/user/'+this.var1.toString())
            .then(resp => {
               
                this.setState({
                    myuser: resp.data
                    
                })
                console.log(this.myuser);

            })

    }
    render() {
        return (
            
            <div class="container section row">

                <div>
                    <img src="./images/user.png" alt="user" class="circle col s4"></img>

                </div>

                {this.state.myuser.map((user) =>
                

                    <div class="col s8" >



                        <div class="">
                            <p><span>
                                <h3><b>{/*Shweta Chopra*/}{user.username}</b><br></br></h3></span></p>
                        </div>
                        {/* <div>
     <p><span><i class="material-icons left small">email</i><h5>choprass@rknec.edu
    </h5></span></p> 
   
</div> */}
                        <div>
                            <p><span><i class="material-icons left small">house</i><h5>Hotel and Room Details:</h5>
                                <h6>&emsp;&emsp;&emsp;&emsp;Hotel Name&emsp;&emsp; :&emsp;<b>Nomadgao.&emsp;&emsp;<br></br></b>&emsp;&emsp;&emsp;&emsp;Room Number&emsp;:&emsp;<b>{/*340B*/}{user.room}</b></h6></span></p>
                        </div>
                        <div>
                            <p><span><i class="material-icons left small">access_time</i><h5>Checkin Details:</h5>
                                <h6>&emsp;&emsp;&emsp;&emsp;Check-in date&emsp;:<b>&emsp;{/*12/02/2021*/}{user.checkin}</b><br></br>&emsp;&emsp;&emsp;&emsp;Check-in time&emsp;:<b>&emsp;22:10:55 IST </b></h6></span></p>
                        </div>
                        {/* <div>
    <p><span><i class="material-icons left small">assignment</i><h5>Billing Details:</h5>
    <h6>&emsp;&emsp;&emsp;&emsp;Total Amount &emsp;:<b> &emsp;₹ 10000</b><br></br></h6></span></p>
</div> */}
                        <div>
                            <p><span><i class="material-icons left small">access_time</i><h5>Check-out Details:</h5>
                                <h6>&emsp;&emsp;&emsp;&emsp;Check-out date&emsp;:<b>&emsp;{/*24/02/2021*/}{user.checkout}</b><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;</h6></span></p>
                        </div>

                    </div>

                )}




            </div>

        )
    }
}

export default Profile
