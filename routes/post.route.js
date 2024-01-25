const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const postController    = require('../controllers/post.controller');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/posts', postController.getPosts);
router.get('/post/:id', postController.getPost);

router.post('/post', authenticateToken, upload.single('image'), postController.createPost);
router.put('/post/:id', authenticateToken, upload.single('image'), postController.updatePost);
router.delete('/post/:id', authenticateToken, postController.deletePost);

module.exports = router;