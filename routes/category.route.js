const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/categories', categoryController.getCategories);
router.get('/category/:id', categoryController.getCategory);

router.post('/category', authenticateToken, categoryController.createCategory);
router.put('/category/:id', authenticateToken, categoryController.updateCategory);
router.delete('/category/:id', authenticateToken, categoryController.deleteCategory);

module.exports = router;