import React, { Component } from 'react'
import axios from 'axios';
import M from 'materialize-css';
import {Pie, Doughnut} from 'react-chartjs-2';
//import './Admin.css';


class Admin1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const piec = {
            labels: ['January', 'February', 'March',
                     'April', 'May'],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                data: [65, 59, 80, 81, 56]
              }
            ]
          }
        
    
        var el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {});

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                
                <div class="container row">
                    <h3>Activities</h3>
                    <div class=" col l6" style={{ overflow: "auto", height: "550px" }}>
                        <ul class="collection">
                            {this.state.posts.map(post => <li class="collection-item avatar" key={post.id}>
                                <i class="material-icons circle">person</i>
                                <span class="title">{post.name}</span>
                                <p class="truncate">{post.email}</p>
                                <p class="truncate">{post.phone}</p>
                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                            </li>)}
                        </ul>
                    </div>
                    <div class="col s12 m6">
                        <div class="card">
                            <ul class="collection">
                                <li class="collection-item">Total Users: 10</li>
                                <li class="collection-item">Total Rooms: 13</li>
                                <li class="collection-item">Occupied Rooms: 10</li>
                                <li class="collection-item">Available Rooms: 3</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col s12 m6">
                    <Doughnut
          data={this.piec}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin1
