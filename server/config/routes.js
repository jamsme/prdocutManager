var products = require('./../controllers/products.js');
var path = require('path');
module.exports = function(app){

    app.post('/products', products.create);
    app.get('/products', products.all);
    app.get('/products/:id', products.specific);
    app.put('/edit/:id', products.edit);
    app.delete('/delete/:id', products.delete);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}