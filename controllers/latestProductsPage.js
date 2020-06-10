//jshint esversion:6
const Product = require('../models/Product');
module.exports = async function(req, res){
  try{
    var count = 10; // Latest 10 products
    const Products = await Product.find({}).populate('category');
    slicedProducts = Products.slice(count > Products.length ? 0 : Products.length - count,Products.length)
    res.render('latestProducts', {
      Products: slicedProducts,
    });
  }catch(err){
    console.log(err);
  }
}
