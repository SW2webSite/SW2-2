const Product = require('../models/Product')

module.exports = function(req, res, next) {
  Product
    .findById(req.params.id)
    .populate('category')
    .exec(function(err, products) {
      if (err) return next(err);
      req.session.productId = req.params.id;
      res.render('single-product', {
        products: products
      });
    });
};
