const express = require ("express")
const mongoose = require("mongoose")

const app = express ()

app.use (express.json())

const db = "mongodb+srv://EmanAbuWaked:emanmoon93@cluster0.ez1k5.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(db, ({useNewUrlParser : true, useUnifiedTopology: true}))
.then (console.log ("connected to mongodb"))
.catch(err => console.log(err))

const todoSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }
})
const Todo = mongoose.model("todo", todoSchema)

app.get ("/todos", (req, res)=>{
    Todo
    .find()
    .then(todo=> res.json(todo))
})

app.post ("/todos", (req, res)=>{
const newTodo = new Todo({
    title: req.body.title
    
})
newTodo.save().then(todo=> res.json(todo))
})

app.delete ("/todos/:id", (req, res)=>{
   Todo.findByIdAndDelete(req.params.id)
   .then(()=> res.json({remove:true}))
})

app.listen (5000,()=> {
    console.log("server is running")
})