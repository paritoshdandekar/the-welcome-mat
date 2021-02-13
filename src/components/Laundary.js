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
                            {/* no. of clothes */}

                            <div className="input-field section">
                                <input id="clotheCount" min="0" type="number" className="validate"></input>
                                <label for="clotheCount">Number of Clothes</label>
                            </div>

                            {/* choose  */}
                            <div className="input-field section">
                                <select className="validate">
                                    <option value="" disabled selected >Choose your option</option>
                                    <option value="1">08AM to 09AM</option>
                                    <option value="2">09AM to 10AM</option>
                                    <option value="3">10AM to 11AM</option>
                                    <option value="4">11AM to 12PM</option>
                                    <option value="5">12PM to 1PM</option>
                                    <option value="6">2PM to 3PM</option>
                                    <option value="7">5PM to 6PM</option>
                                </select>
                                <label for="Pickuptime" >Choose Laundary Pickup time:</label>
                            </div>

                            {/* what to do */}
                            <div className="input-field section">
                                <select multiple className="validate">
                                    <option value="" disabled>Choose your options</option>
                                    <option value="1">Wash</option>
                                    <option value="2">Iron</option>
                                    <option value="3">Dry Clean</option>
                                </select>
                                <label>What do we do with your Stuff:</label>
                            </div>

                            {/* submit */}
                            <div className="center">
                            <button onClick={this.onAlert} className="btn-small">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Laundary