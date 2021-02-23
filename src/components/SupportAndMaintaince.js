import React, { Component } from 'react'
import M from 'materialize-css';


class SupportandMaintaince extends Component {
    constructor(props) {
        super(props)

        this.onAlert = this.onAlert.bind(this)
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
        var elems2 = document.querySelectorAll('.modal');
        M.Modal.init(elems2, {});       
    }

    onAlert() {

        alert("Success..!! The correspondant will contact you in some time.")
    }
    
    render() {
        return (
            <div className="section container valign-wrapper z-depth-5" >
                <div className="row input-field">
                    <p><h3>Enter the type of Electrical maintenance you need.</h3></p>


                    <form action="#">

                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Switch Board issues</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Ceiling Fans</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Lights</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Geysers and Room Heaters</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Issues with the Entry Key</span>
                            </label>
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>

                        <p><h6>Any specific details which you want to highlight. [Optional]</h6></p>
                        <div className="row section">
                            <form className="col s12 l12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Write your issue here</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="modal1" class="modal">
                            <div className="modal-content">
                                <h4>Confirmation</h4>
                                <p>Do you want to file this complaint ticket?</p>
                            </div>
                            <div className="modal-footer">
                                <a className="modal-close waves-effect waves-green btn-flat" onClick={this.onAlert}>Agree</a>
                            </div>
                        </div>
                        <div className="center">
                            <button className="btn waves-effect waves-light modal-trigger" href="#modal1">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
}

export default SupportandMaintaince