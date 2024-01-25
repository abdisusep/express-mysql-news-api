const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route'); 
const postRoutes = require('./post.route'); 
const categoryRoutes = require('./category.route'); 

router.use('/auth', authRoutes);
router.use('/', categoryRoutes);
router.use('/', postRoutes);

module.exports = router;	