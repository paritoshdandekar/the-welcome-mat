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

        alert("Your issue will be processed in priority!")
    }
    
    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5" >
                <div className="row">
                    <h3 className="center-align">Electrical Maintenance</h3>
                    <p className="center-align">Enter the type of Electrical maintenance you need:</p>
                    <div className="col s12 m10 l6 push-l3 push-m1">
                    <form action="#">
                    <div class="valign-wrapper" class="card-panel" >
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span class="black-text">Switch Board issues</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span class="black-text">Ceiling Fans</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span class="black-text">Lights</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span class="black-text">Geysers and Room Heaters</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span class="black-text">Issues with the Entry Key</span>
                            </label>
                        </p>
                        <br></br>

                        <p><h6>Any specific details which you want to highlight. [Optional]</h6></p>
                        <div className="row section">
                            <form className="col s12 l12">
                                
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Write your issue here</label>
                                    </div>
                               
                            </form>
                        </div>
                        
                        <div className="center">
                            <button onClick={this.onAlert} className="btn-small">Submit</button>
                            </div>
                        </div>
                    </form>
                  </div>
                </div>
                </div>
            

        )
    }
}

export default SupportandMaintaince