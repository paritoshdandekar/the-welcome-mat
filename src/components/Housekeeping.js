import React, { Component } from 'react'
import M from "materialize-css";

export class Housekeeping extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems1 = document.querySelectorAll('select');
      M.FormSelect.init(elems1, {});
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
    });
  }
  render() {
    return (
      <div class="container" >
        <h4> HOUSEKEEPING SERVICES </h4>
        <p>Choose the services(s) you need:</p>
        <form action="#">
          <div class="valign-wrapper" class="card-panel grey lighten-2" >
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
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Submit</a>
            <div id="modal1" class="modal">
              <div class="modal-content">
                <h5>Request Recorded</h5>
                <p>Your request will be processed soon!</p>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">OKAY</a>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default Housekeeping
