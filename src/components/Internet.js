import React, { Component } from 'react'
import M from 'materialize-css';

class Internet extends Component {
    constructor(props) {
        super(props)
        this.onAlert = this.onAlert.bind(this)
    }
    componentDidMount() {
        
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {});
            var elems1 = document.querySelectorAll('select');
            M.FormSelect.init(elems1, {});
            
       
    }
    onAlert() {

        alert("Your issue will be processed in priority!")
    }
    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5" >
                <div className="row">
                <div className="col s12 m10 l6 push-l3 push-m1">
                <h3 className="center-align"> Internet Issues</h3>
                    <p className="center-align">Enter your issues here:</p>
                    <form >
                    <div class="valign-wrapper" class="card-panel " >
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span class="black-text"> Slow wifi 'Download Speed'.</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span  class="black-text"> Slow wifi 'Upload Speed'.</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span  class="black-text"> Fluctuating network speed.</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span  class="black-text"> No wifi range at all.</span>
                            </label>
                        </p>
                        <br></br>

                        <p><h6>Any specific Problem. [Optional]</h6></p>
                        <div className="row section">
                            <form className="col s12 l12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Here</label>
                                    </div>
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

export default Internet