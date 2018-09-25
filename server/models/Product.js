var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    price: {type: Number, required: true, minlength: 3},
    imageUrl: {type: String, required: false}
}, {timestamps: true});

mongoose.model('Product', ProductSchema);