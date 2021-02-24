import React, { Component } from 'react'
import M from "materialize-css";

class Housekeeping extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {

    var elems1 = document.querySelectorAll('select');
    M.FormSelect.init(elems1, {});
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});

  }
  onAlert() {
    alert("The requested services will be provided in priority!")
  }

  render() {
    return (
      <div className="container section z-depth-5 blue-grey lighten-5" >
        <div class="container" >
        <h3 className="center-align"> Housekeeping </h3>
          <p className="center-align">Choose the service(s) you need:</p>
          <form action="#">
            <div class="valign-wrapper" class="card-panel " >
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Sweeping and Mopping the floor</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Making the bed</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Changing the dirty Linen and Towels</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Restocking toiletries</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Restocking other room amenities</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Collecting Garbage</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span class="black-text">Cleaning Toilet </span>
                </label>
              </p>
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
              <div className="center">
                <button onClick={this.onAlert} className="btn-small">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default Housekeeping
