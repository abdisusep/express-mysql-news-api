require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const mainRoutes = require('./routes'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(helmet());

app.use('/api', mainRoutes);

app.get('/', async (req, res) => {
    res.send('News API ExpressJS by Susep Dev');
});

app.listen(port, () => {
    console.log(`Running on port:${port}`);
});