import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';

class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menus: [],
            userId: '',
            food_type: '',
            food_name: '',
            food_price: '',
            status: ''
        }
    }

    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        axios.get('./menu.json')
            .then(resp => {
                this.setState({
                    menus: resp.data
                })
            })

    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        const FoodOrder = {
            food_type: this.state.food_type,
            food_name: this.state.food_name
        }

        console.log(FoodOrder);

    }
    onAlert() {
        // alert(`${this.state.food_name} ${this.state.food_price}`)
        alert("Your food has been ordered.")
    }
    render() {
        return (
            <div className="blue-grey lighten-5">
                <img className="" alt="card" src="../images/veggie.jpg" />



                <h3 className="center-align">Food Menu</h3>

                <div class="card">
                    <div class="card-content">

                    </div>
                    <div class="card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a href="#test1">Breakfast</a></li>
                            <li class="tab"><a class="active" href="#test2">Lunch</a></li>
                            <li class="tab"><a href="#test3">Dinner</a></li>
                        </ul>
                    </div>
                    <div class="card-content grey lighten-4">
                        <div id="test1">
                        <div className="row">
                                {this.state.menus.map((item) =>
                                    <div className="col s12 m3">
                                        <div className="card small ">
                                            <div className="card-image">
                                                <img src="../images/food.jpg" />
                                            </div>
                                            <div className="card-content caption">
                                                <p>{item.name}</p>
                                                <p>{item.price}</p>
                                                <button class="btn-floating waves-effect waves-light right"><i class="material-icons black ">add_circle_outline</i></button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id="test2">
                        <div className="row">
                                {this.state.menus.map((item) =>
                                    <div className="col s12 m3">
                                        <div className="card small ">
                                            <div className="card-image">
                                                <img src="../images/food.jpg" />
                                            </div>
                                            <div className="card-content caption">
                                                <p>{item.name}</p>
                                                <p>{item.price}</p>
                                                <button class="btn-floating waves-effect waves-light right"><i class="material-icons black ">add_circle_outline</i></button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id="test3">
                            <div className="row">
                                {this.state.menus.map((item) =>
                                    <div className="col s12 m3">
                                        <div className="card small ">
                                            <div className="card-image">
                                                <img src="../images/food.jpg" />
                                            </div>
                                            <div className="card-content caption">
                                                <p>{item.name}</p>
                                                <p>{item.price}</p>
                                                <button class="btn-floating waves-effect waves-light right"><i class="material-icons black ">add_circle_outline</i></button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="row">
                    <div className="card col s12 m10 l6 push-l3 push-m1 ">

                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab"><a className="active" href="#test4">Breakfast</a></li>
                                <li className="tab"><a href="#test5">Lunch</a></li>
                                <li className="tab"><a href="#test6">Dinner</a></li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                            <div id="test4">
                                <ul className="collection">
                                    {this.state.menus.map(menu => <li class="collection-item avatar" key={menu.id}>
                                        <i className="material-icons circle">emoji_food_beverage</i>
                                        <span>{menu.name}</span>
                                        <p>{menu.price}</p>
                                        <button className="btn-small secondary-content" onClick={this.onAlert}>Order</button>
                                    </li>)}
                                </ul>
                            </div>
                            <div id="test5">
                                <ul className="collection">
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">fastfood</i>
                                        <span>Masala Bhindi</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">fastfood</i>
                                        <span>Egg Curry</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">fastfood</i>
                                        <span>Chole Batura</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">fastfood</i>
                                        <span>Chicken Curry</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">fastfood</i>
                                        <span>Paneer Achaari</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                </ul>
                            </div>
                            <div id="test6">
                                <ul className="collection">
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">flatware</i>
                                        <span>Paneer Butter Masala</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">flatware</i>
                                        <span>Kadhai Paneer</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">flatware</i>
                                        <span>Rajma Masala</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">flatware</i>
                                        <span>Lemon Rice</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle">flatware</i>
                                        <span>Khichdi</span>
                                        <p>₹ 350</p>
                                        <a href="#!" className="secondary-content"><button className="btn-small">Order</button></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Food
