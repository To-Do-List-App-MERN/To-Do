import React, { Component } from 'react';
import {Consumer} from "../context";
import axios from "axios";
import"./AddToDoList.css"

export default class AddToDoList extends Component {
    state = {
        id: 4,
        title : "",
        complete: false
    }
    update = (e)=>{
        this.setState({
            title: e.target.value
        })
    }

    add = (dispatch, e)=>{
        e.preventDefault()
        const newTodo = this.state;
        axios.post("/todos",newTodo)
        .then(res=>dispatch({type: "ADD", payload: res.data}))
        
        this.setState({
            title: ""
        })
    }
    render() {
        return (
        <Consumer>{value =>{
            const {dispatch} = value
            return (<form onSubmit ={this.add.bind(this,dispatch)}>
                <input type = "text" placeholder ="write your task here" className="task" onChange = {this.update} value = {this.state.title}></input>
                <button type ="submit" className= "add">Add The Task</button>
                </form>)
                }}
                </Consumer>
                )
            }
        }
