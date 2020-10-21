const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/aboutus');
const contactRouter = require('./routes/contactus');
const cartRouter = require('./routes/cart');

const hostname = 'localhost';
const port = 3001;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/cart', cartRouter);

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is a 404 page. request not found</h1></body></html>');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, console.log("connected to db"));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});