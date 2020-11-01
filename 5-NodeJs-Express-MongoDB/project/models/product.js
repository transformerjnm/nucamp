const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   product: {
        id: { type: Number },
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: { type: mongoose.Types.Decimal128, required: true },
        imgSrc: {type: String, required: true},
        imgAlt: {type: String, required: true},
        bestSeller: {type: Boolean, required: true, default: false}
   }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;