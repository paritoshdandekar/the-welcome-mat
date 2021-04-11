import React, { Component } from 'react'
import M from 'materialize-css';
import axios from 'axios';
export class Addprice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pric: [],
            count: 0,
            s:0


        }
    }

    componentDidMount() {
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});


        axios.get('./menu.json')
            .then(resp => {

                this.setState({
                    pric: resp.data

                })
                console.log(this.pric);

            })

    }
    Sum=(x)=>
    {
        
        this.state.count=this.state.count+x
   
    }
    render() {
        return (
            <div>
                
                
                {this.state.pric.map((pr) =>
               // <h2>{pr.price}{pr.id}</h2>
                //  this.count = this.count + pr.price
                {(this.state.s)=Number(this.state.s)+Number(pr.price)}
                
                
                )}

                    <h2>{this.state.s}</h2>
                
            </div>
            

        )
    }
}

export default Addprice
