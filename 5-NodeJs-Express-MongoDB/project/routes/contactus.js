const express = require('express');
const bodyParser = require('body-parser');

const contactRouter = express.Router();

contactRouter.use(bodyParser.json());

contactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('<html><body><h1>Getting contact Page</h1></body></html>');
})

module.exports = contactRouter;