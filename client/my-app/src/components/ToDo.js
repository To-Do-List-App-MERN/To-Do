import React, { Component } from 'react'
import {Consumer} from "../context"
import axios from "axios"
import "./ToDo.css"
export default class ToDo extends Component {
       style = ()=>{
           const {complete} = this.props.todo;
           return {textDecoration : complete ? "line-through": "none"}
       }
       
       toggle = (id, dispatch)=>{
           dispatch({type: "TOGGLE", payload: id})
            
       }

       remove= (id, dispatch)=>{
           
           axios.delete(`/todos/${id}`)
           .then(()=> dispatch({type: "REMOVE", payload: id}))    
       }

       
       
       render() {
        const {title, _id} = this.props.todo
        return (
            
                <Consumer >
                    {value =>{
                    const {dispatch} = value
                    return (
                    <h3 className= "taskList-content" style ={this.style()}>
                    <input type= "checkbox" className= "checkbox" onChange ={this.toggle.bind(this, _id, dispatch)}/>
                   {title}
                    <i className="far fa-trash-alt" onClick= {this.remove.bind(this, _id, dispatch)}></i>
                    </h3>
                    )
                }}</Consumer>   
        )
    }
} 

