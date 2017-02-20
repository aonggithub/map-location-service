'use strict';
const Category = require('../models/categories');


exports.getCategories = function(req, res, next){
  Category.find({}, function(err, categories){
    if(err) {return next(err);}
    res.status(200).json({ message: "Thanks! Your request was displayed successfuly!"
                        , data: categories})
    next();
  })
}
