const router = require('express').Router();

const todoController = require('./controllers/todoController');

const paths = {
    todos: '/api/todos'
}

router.use(paths.todos, todoController);

router.all('*',(req,res)=>{
    res.status(404).json({message: "Path not found!"});
});

module.exports = router;