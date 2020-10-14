const express = require('express');
const bodyParser = require('body-parser');

const cartRouter = express.Router();

cartRouter.use(bodyParser.json());

cartRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('<html><body><h1>Getting cart Page</h1></body></html>');
})
.delete((req, res) => {
    res.end('<html><body><h1>Deleting all items in the cart</h1></body></html>');
});

module.exports = cartRouter;