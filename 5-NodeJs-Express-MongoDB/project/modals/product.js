const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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

module.exports = mongoose.model('Product', productSchema);