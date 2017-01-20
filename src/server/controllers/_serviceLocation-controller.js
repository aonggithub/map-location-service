'use strict';
const ServiceLocation = require('../models/serviceLocation');

exports.createServiceLocation = function(req, res, next){
   // Add Service Location which is got from User's assignment
}

exports.getServiceLocation = function(req, res, next){

  ServiceLocation.find({}, function(err, serviceLocations){
    if(err) {return next(err);}
    res.status(200).json({ message: "Thanks! Your request was displayed successfuly!"
                        , data: serviceLocations})
    next();
  })
}
