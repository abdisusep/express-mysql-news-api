require('dotenv').config();
const express = require('express');

const postRoutes = require('./routes/post.route'); 
const categoryRoutes = require('./routes/category.route'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', postRoutes);
app.use('/api', categoryRoutes);

app.get('/', async (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Running on port:${port}`);
});