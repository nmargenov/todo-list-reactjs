const Todo = require("../models/todo");

exports.getAllPosts = () => {
    return Todo.find();
}

exports.createPost = (description) => {
    const todo = {
        description,
        isCompleted: false,
    }
    return Todo.create(todo);
}

exports.deleteById = (id) => {
    return Todo.findByIdAndDelete(id);
}

exports.editById = async (id, description) => {
    const todo = await Todo.findById(id);

    if(todo.isCompleted){
        throw new Error("Cannot change todo that's completed!");
    }

    const edit = {
        description
    }
    return Todo.findByIdAndUpdate(id, edit, { runValidators: true, new: true });
}

exports.markAsCompleted = async (id)=>{
    const edit = {
        isCompleted:true
    }
    return Todo.findByIdAndUpdate(id, edit, { runValidators: true, new: true });
}

exports.getOneById = (id) =>{
    return Todo.findById(id);
}