var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

create: (req, res) => {
    var myProduct = new Product(req.body);
    myProduct.save(function(err, product) {
        if (err) {
            console.log('got errors creating a product', err);
            res.json(err);
        } else {
            console.log("made a new product");
            res.json(product);
        }
    })
},

all: (req, res) => {
    Product.find({}, function(err, product) {
        if (err) {
            console.log("error getting all of the products");
            res.json(err);
        } else {
            console.log("got all of the products");
            res.json(product);
        }
    })
},

specific: (req, res) => {
    Product.findOne({_id: req.params.id}, function(err, product) {
        if (err) {
            console.log("error getting specific product");
            res.json(err);
        } else {
            console.log("got the one product");
            res.json(product);
        }
    })
},

edit: (req, res) => {
    Product.findOne({_id: req.params.id}, function(err, product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.imageUrl = req.body.imageUrl;
        product.save(function(err) {
            if (err) {
                console.log("error editing the product");
                res.json(err);
            } else {
                console.log("successfully edited the product");
                res.json(product);
            }
        })
    })
},

delete: (req, res) => {
    Product.deleteOne({_id: req.params.id}, function(err) {
        if (err){
            console.log("how did you mess up deleting something?");
            res.json(err);
        } else {
            console.log(`you deleted`);
            res.json({message: "hello"})
        }
    })
}

}