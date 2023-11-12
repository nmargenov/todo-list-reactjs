const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true,'Description is required!'],
        minLength:[2,'Description must be at least 2 characters long!'],
        maxLength:[100,'Description must not exceed 100 characters long!'],
    },
    isCompleted:{
        type:Boolean,
        required:[true,'isCompleted is required!']
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;