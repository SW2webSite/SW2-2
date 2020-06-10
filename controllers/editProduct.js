//jshint esversion:6
const Product = require('../models/Product');

module.exports = function(req, res){
  console.log(req.session.productId);
    Product.findOne({ _id: req.session.productId }, function(err, product){
      if (err) return next(err);
      if (req.body.productName) product.name = req.body.productName;
      if (req.body.productPrice) product.price = req.body.productPrice;
      if (req.body.productDescription) product.price = req.body.productDescription;
      if (req.body.productCategory) product.category = req.body.productCategory;
      product.save(function(err){
        if (err) return next(err);
        req.flash('success', 'Successfully Edited !');
        return res.redirect('/products/'+ req.session.productId);
      });
    });
};
