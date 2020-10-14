const express = require('express');
const bodyParser = require('body-parser');

const aboutRouter = express.Router();

aboutRouter.use(bodyParser.json());

aboutRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res) => {
    res.end('<html><body><h1>Getting About Page</h1></body></html>');
})

module.exports = aboutRouter;