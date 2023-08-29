const mongoose = require('mongoose');

const product_schema = mongoose.Schema({
    name:String,
    price: Number,
    category: String,
    user_id: String,
    company:String,
});

const Products = mongoose.model('products',product_schema);
module.exports = Products;