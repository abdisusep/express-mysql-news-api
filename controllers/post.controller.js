const service = require('../services/post.service');

const getPosts = async (req, res) => {
    try {
        const posts = await service.getPosts();
        res.status(200).json(posts);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const getPost = async (req, res) => {
    try {
        const id   = req.params.id;
        const post = await service.getPost(id);
        res.status(200).json(post);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

const createPost = async (req, res) => {
    try {
        const data = req.body;
        const post = await service.createPost(data);
        res.status(201).json(post);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const updatePost = async (req, res) => {
    try {
        const data = req.body;
        const id   = req.params.id;
        const post = await service.updatePost(data, id);
        res.status(200).json(post);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const deletePost = async (req, res) => {
    try {
        const id   = req.params.id;
        const post = await service.deletePost(id);
        res.status(200).json(post);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = {
    getPosts, getPost, createPost, updatePost, deletePost
}