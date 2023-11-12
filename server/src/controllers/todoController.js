const { getAllPosts, createPost, deleteById, editById, markAsCompleted, getOneById } = require('../managers/todoManager');

const router = require('express').Router();

const paths = {
    todo: '/:id',
    todos: '/',
}

router.get(paths.todos, async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
});

router.post(paths.todos, async (req, res) => {
    try {
        const description = req.body.description?.trim();
        const post = await createPost(description);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

router.delete(paths.todo, async (req, res) => {
    try {
        const id = req.params.id;
        const post = await deleteById(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

router.put(paths.todo, async (req, res) => {
    try {
        const id = req.params.id;
        const description = req.body.description?.trim();
        const post = await editById(id, description);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})

router.patch(paths.todo, async (req, res) => {
    try {
        const id = req.params.id;
        const post = await markAsCompleted(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

router.get(paths.todo,async(req,res)=>{
    try {
        const id = req.params.id;
        const post = await getOneById(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})

module.exports = router;