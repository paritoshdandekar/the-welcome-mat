import React, { Component } from 'react'
import M from 'materialize-css';

class Laundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onAlert = this.onAlert.bind(this)
        this.forceUpdate();

    }

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});

        });
    }

    onAlert() {

        alert("yay! Slot Booked!")
    }
    onDecrement() {
        this.setState({
            count: this.state.count - 1
        },
            //use callback to get the updated value
            () => {
                console.log('Callback Value', this.state.count)
            }
        )
        // console.log(this.state.count)
    }
    onIncrement() {
        this.setState({
            count: this.state.count + 1
        },
            //use callback to get the updated value
            () => {
                console.log('Callback Value', this.state.count)
            }
        )
        // console.log(this.state.count)
    }
    render() {
        return (
            <div className=" container section z-depth-5 blue-grey lighten-5" >
                <h2 className="center-align">Laundary</h2>
                <form >
                <div className=" row" >
                    <div className="col s12 m10 l6 push-l2 push-m1 ">
                        

                            {/* no. of clothes */}
                            <div className="row ">
                                <div className="input-field ">
                                    <input placeholder="How Manay Clothes??" id="clotheCount" type="number" className="validate"></input>
                                    <label for="clotheCount" className=""></label>
                                </div>
                            </div>



                            {/* <div className="row section"> */}
                            {/* <button className="btn-large "  >No. of Clothes</button>
                    
                    <button className="btn-large "  >{this.state.count}</button>
                    
                    <div class="row ">
                    <button className="waves-effect waves-light btn-small " onClick={this.onIncrement}>Increment</button>
                    <br></br>
                    <button className="waves-effect waves-light btn-small " onClick={this.onDecrement}>Decrement</button>
                    </div> */}
                            {/* </div> */}


                            {/* choose  */}
                            <div >
                                <div className="row section">
                                    <div className="input-field ">
                                        <select>
                                            <option value="" disabled selected>Choose Laundary Pickup time:</option>
                                            <option value="1">08AM to 09AM</option>
                                            <option value="2">09AM to 10AM</option>
                                            <option value="3">10AM to 11AM</option>
                                            <option value="4">11AM to 12PM</option>
                                            <option value="5">12PM to 1PM</option>
                                        
                                            <option value="6">2PM to 3PM</option>
                                            <option value="7">5PM to 6PM</option>
                                        </select>
                                        <label></label>
                                    </div>
                                </div>
                            </div>

                            {/* what to do */}
                            <div >
                                <div className="row section ">
                                    <div className="input-field ">
                                        <select multiple>
                                            <option value="" disabled selected>What do we do with your Stuff:</option>
                                            <option value="1">Wash</option>
                                            <option value="2">Iron</option>
                                            <option value="3">Dry Clean</option>
                                        </select>
                                        <label></label>
                                    </div>
                                </div>
                            </div>


                            {/* submit */}
                            <div>
                                <button className="btn waves-effect waves-light " onClick={this.onAlert} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                                </button>
                            </div>
                        
                    </div>
                </div></form>
            </div>
        )
    }
}

export default Laundary
