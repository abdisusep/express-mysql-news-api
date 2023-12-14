const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');

router.get('/posts', postController.getPosts);
router.get('/post/:id', postController.getPost);
router.post('/post', postController.createPost);
router.put('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;