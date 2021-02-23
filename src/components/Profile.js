import React, { Component } from 'react'
import M from 'materialize-css';


export class Profile extends Component {
    componentDidMount() {

        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
        var elems2 = document.querySelectorAll('.modal');
        M.Modal.init(elems2, {});

    }
    render() {
        return (
            <div class="container section row">

                <div class="">
                    <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="circle col s4" width="100px" height="390"></img>

                </div>
                <div class="col s8" >
                
                    <div class="">
                        <p><span>  
                        <h3><b>Shweta Chopra</b><br></br></h3></span></p>
                    </div>
                    <div>
                         <p><span><i class="material-icons left small">email</i><h5>choprass@rknec.edu
                        </h5></span></p> 
                       
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">house</i><h5>Hotel and Room Details:</h5>
                        <h6>&emsp;&emsp;&emsp;&emsp;Hotel Name&emsp;&emsp; :&emsp;<b>Le Méridien Hotel.&emsp;&emsp;<br></br></b>&emsp;&emsp;&emsp;&emsp;Room Number&emsp;:&emsp;<b>340B</b></h6></span></p>
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">access_time</i><h5>Checkin Details:</h5>
                        <h6>&emsp;&emsp;&emsp;&emsp;Check-in date&emsp;:<b>&emsp;12/02/2021</b><br></br>&emsp;&emsp;&emsp;&emsp;Check-in time&emsp;:<b>&emsp;22:10:55 IST </b></h6></span></p>
                    </div>
                    <div>
                        <p><span><i class="material-icons left small">assignment</i><h5>Billing Details:</h5>
                        <h6>&emsp;&emsp;&emsp;&emsp;Total Amount &emsp;:<b> &emsp;₹ 10000</b><br></br></h6></span></p>
                    </div>
                </div></div>
        )
    }
}

export default Profile
