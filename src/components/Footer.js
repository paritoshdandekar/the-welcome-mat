import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer blue-grey darken-4">
                    <div class="container">
                        <div class="row">
                            {/* WELCOME MAT */}
                            <div class="col l3 s12 ">
                                <h5 class="white-text " style={{ fontFamily: "Lobster" }}>The Welcome Mat</h5>
                                <p class="grey-text text-lighten-4">Come in as Guests.
                                <br></br> Leave as Family.</p>
                            </div>

                            {/* CONTACT */}


                            <div class="col l2 s12 ">
                                <h6 class=" large material-icons text-lighten-3 " >local_phone</h6>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" >1111111111</a></li>
                                    <li><a class="grey-text text-lighten-3" >2222222222</a></li>
                                    <li><a class="grey-text text-lighten-3" >3333333333</a></li>
                                </ul>
                            </div>
                            {/* LINKS */}
                            <div class="col l2 s12 ">
                                <h6 class="white-text">Links</h6>
                                
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="#!">FAQ's</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Terms and Conditions</a></li>
                                </ul>
                            </div>

                            {/* VISIT */}
                            <div class="col l5  s12 ">
                                <h6 class="white-text">Visit</h6>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" >
                                        Shri Ramdeobaba College of Engineering and Management<br></br></a></li>
                                    <li><a class="grey-text text-lighten-3" >Katol Road<br></br></a></li>
                                    <li><a class="grey-text text-lighten-3" >Nagpur,<br></br></a></li>
                                    <li><a class="grey-text text-lighten-3" >Maharashtra 440013<br></br></a></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2021 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
