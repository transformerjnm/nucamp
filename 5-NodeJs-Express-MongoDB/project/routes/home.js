const express = require('express');
const bodyParser = require('body-parser');
const Product = require('../modals/products');

const homeRouter = express.Router();

homeRouter.use(bodyParser.json());

homeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products[0]);
    } catch(err){
        res.json(err);
    }
})

module.exports = homeRouter;