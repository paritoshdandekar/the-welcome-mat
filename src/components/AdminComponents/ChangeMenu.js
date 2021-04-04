import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';
// import './ChangeMenu.css';

class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu_name:null ,
            menu_type: null,
            menu_price:0,
            menu_img_link: null,
            menus: []
        }
    }

    // changemenu ka collection change karna hai isme 
    // delete from collection
    // add to collection via form 
    //add alert


    submitHandler = e => {
        const User = {
            itemname: this.state.itemname,
            price: this.state.price,
            imag: this.state.imag,
            type1: this.state.type1,
        }
        {/* axios.post('http://localhost:5000/user/add', User)
            .then(res => console.log(res.data));
        console.log(User);*/}

        // alert(${this.state.itemname} + ${this.state.price} + ${this.state.imag} + ${this.state.type1} + "  Added New Item")
        this.setState = {
            itemname: '',
            price: '',
            imag: '',
            type1: null
        }
    }

    deleteExercise = id => {
        axios.delete('http://localhost:5000/menu/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          menus: this.state.menus.filter(el => el._id !== id)
        })
      }

    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
        var elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1, {});
        axios.get('./menu.json')
            .then(resp => {
                this.setState({
                    menus: resp.data
                })
            })
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});



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
            <div >

                <div className="col s12 m10 l6 push-l3 push-m1 container section z-depth-5 blue-grey lighten-5">
                    <h3 className="center-align"> Change Menu </h3>
                    <form className="container section  blue-grey lighten-5" >
                        <div className="row section ">
                            <div className="input-field col s12 section">
                                <h6>Item Name</h6>
                                <input id="itemname" type="text" value={this.itemname} name='itemname' className="validate"></input>
                            </div>

                            <div className="input-field col s6 section">
                                <h6>Price of Item</h6>
                                <input id="price" type="text" value={this.price} name='price' className="validate"></input>
                            </div>

                            <div className="input-field col s6 section">
                                <h6>Image Link:</h6>
                                <input id="imag" type="text" value={this.imag} name='imag' className="validate"></input>

                            </div>

                            <div className="input-field col s12 section">
                                <h6>Type of food :</h6>

                                <select value={this.type1} name='type' className="validate">
                                    <option value="" disabled selected >Choose your option</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>

                            </div>

                        </div>
                        <div className="center">
                            <button className="btn-small">Add</button>
                        </div>
                    </form>
                </div>

                {/* button me change handler me delete from collection karna hai  */}

                <div class="card" style={{ marginBottom: "0px" }}>

                    <div class="card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a class="active" href="#test1">Breakfast</a></li>
                            <li class="tab"><a href="#test2">Lunch</a></li>
                            <li class="tab"><a href="#test3">Dinner</a></li>
                        </ul>
                    </div>
                    <div class="card-content grey lighten-4">
                        <div id="test1">
                            <div className="row">
                                {this.state.menus.map((item) =>
                                    <div className="col s12 m4">
                                        <div className="card small ">
                                            <div className="card-image">
                                                <img src="../images/food.jpg" />
                                            </div>
                                            <div className="card-content">
                                                <span>{item.name}
                                                    <button className="btn-floating waves-effect waves-light right " onClick={this.deleteExercise(item._id)}><i class="material-icons black right ">delete</i></button>
                                                </span>
                                                <p>{item.price}</p>
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
                                            <div className="card-content">
                                                <span>{item.name}
                                                    <button className="btn-floating waves-effect waves-light right "><i class="material-icons black right ">delete</i></button>
                                                </span>
                                                <p>{item.price}</p>
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
                                            <div className="card-content">
                                                <span>{item.name}
                                                    <button className="btn-floating waves-effect waves-light right "><i class="material-icons black right ">delete</i></button>
                                                </span>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Food
