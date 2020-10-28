const express = require('express');
const bodyParser = require('body-parser');
const Product = require('../modals/product');

const homeRouter = express.Router();

homeRouter.use(bodyParser.json());

homeRouter.route('/')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(async (req, res) => {
    try {
        res.statusCode = 200;
        const products = await Product.find();
        res.send({data: products[0]});
    } catch(err){
        res.statusCode = 400;
        res.json(err);
    }
})

module.exports = homeRouter;