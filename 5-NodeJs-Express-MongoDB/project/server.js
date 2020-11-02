const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getProducts = require('./routes/getProducts');
require('dotenv/config');

if( process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}
app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,  useUnifiedTopology: true }, () => {
    console.log(" Connected to the database");
});
app.use('/getProduct', getProducts);
app.listen( PORT, () => {
    console.log(`API Server is now available on port ${PORT}`);
});