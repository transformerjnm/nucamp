const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	id: { type: Number, required: true },
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: { type: Number, required: true },
    imgSrc: {type: String, required: true},
    imgAlt: {type: String, required: true},
	bestSeller: {type: Boolean, required: true, default: false},
});

module.exports = mongoose.model('Products', ProductSchema);