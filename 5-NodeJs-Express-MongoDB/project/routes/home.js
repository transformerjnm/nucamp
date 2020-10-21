const express = require('express');
const bodyParser = require('body-parser');
const Product = require('../modals/products');

const homeRouter = express.Router();

homeRouter.use(bodyParser.json());

homeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get(async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch(err){
        res.json(err);
    }
}).post((req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgSrc: req.body.imgSrc,
        imgAlt: req.body.imgAlt,
        bestSeller: req.body.bestSeller
    });
    product.save()
    .then( data => res.json(data))
    .catch( err => console.log(err));
})

module.exports = homeRouter;