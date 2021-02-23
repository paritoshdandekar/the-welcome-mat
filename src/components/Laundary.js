import React, { Component } from 'react'
import M from 'materialize-css';

class Laundary extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }
    onAlert() {
        alert("yay! Slot Booked!")
    }

    render() {
        return (
            <div className="container section z-depth-5 blue-grey lighten-5" >
                <h2 className="center-align">Laundary</h2>
                <div className=" row">
                    <div className="col s12 m10 l6 push-l3 push-m1">
                        <form action="#">
                        <div class="valign-wrapper" class="card-panel " >
                            {/* no. of clothes */}

                            <div className="input-field section">
                                <input id="clotheCount" min="0" type="number" className="validate"></input>
                                <label for="clotheCount" class="black-text">Enter the number of Clothes</label>
                            </div>

                            {/* choose  */}
                            <div className="input-field section">
                                <select className="validate">
                                    <option class="grey-text text-lighten-3" value="" disabled selected >Choose your option.</option>
                                    <option value="1">08AM to 09AM</option>
                                    <option value="2">09AM to 10AM</option>
                                    <option value="3">10AM to 11AM</option>
                                    <option value="4">11AM to 12PM</option>
                                    <option value="5">12PM to 1PM</option>
                                    <option value="6">2PM to 3PM</option>
                                    <option value="7">5PM to 6PM</option>
                                </select>
                                <label for="Pickuptime" class="black-text">Select a suitable time at which you want us to pick your laundary.</label>
                            </div>

                            {/* what to do */}
                            <div className="input-field section">
                                <select multiple className="validate">
                                    <option value="" disabled selected class="grey-text text-lighten-3">Choose your options</option>
                                    <option value="1">Wash</option>
                                    <option value="2">Iron</option>
                                    <option value="3">Dry Clean</option>
                                    <option value="4">Fold clothes</option>
                                </select>
                                <label class="black-text">What services do you want?</label>
                            </div>
                            <br></br>
                            <p><h6>Any specific details which you want to highlight. [Optional]</h6></p>
                        <div className="row section">
                            <form className="col s12 l12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Textarea</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                            {/* submit */}
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

export default Laundary