const express = require('express');
const bodyParser = require('body-parser');

const homeRouter = express.Router();

homeRouter.use(bodyParser.json());

homeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('<html><body><h1>Getting Home Page</h1></body></html>');
}).post((req, res) => {
	res.end('<html><body><h1>Adding to Cart</h1></body></html>');
})

module.exports = homeRouter;