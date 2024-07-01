const express = require('express')
const todoList = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {
    name: "Pick up the House",
    description: "Clean the House and Take out the trash",
    imageUrl: "http://www.google.com/images/houses",
    completed: false,
    _id: uuidv4()
    },
    {
    name: "Clean Car",
    description: "Clean the Car",
    imageUrl: "http://www.google.com/images/car",
    completed: false,
    _id: uuidv4()
    },
    {
    name: "Pick up Kids",
    description: "Get the kids from school",
    imageUrl: "http://www.google.com/images/children",
    completed: false,
    _id: uuidv4()
    }
]

todoList.get("/", (req, res)=> {
    res.send(todos)
})

todoList.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(item => item._id === todoId)
    res.send(foundTodo)
})

todoList.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("Added a new task")
})

todoList.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodoIndex = todos.findIndex(item => item._id === todoId)
    todos.splice(foundTodoIndex, 1)
    res.send("Successfully Deleted the Todo Item")
})

todoList.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodoIndex = todos.findIndex(item => item._id === todoId)
    const updatedTodo = Object.assign(todos[foundTodoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoList