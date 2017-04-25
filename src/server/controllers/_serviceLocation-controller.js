'use strict';
const ServiceLocation = require('../models/serviceLocation');
const GoogleAuth = require('google-auth-library');

exports.createServiceLocation = function(req, res, next){
   // Add Service Location which is got from User's assignment
   const serviceLocationParam = req.body.serviceLocation;
   let serviceLocationObj = new ServiceLocation({
     id: '9',
     name: 'Z',
     title: serviceLocationParam.placeName,
     lat: serviceLocationParam.lat,
     lng: serviceLocationParam.lng,
     category: serviceLocationParam.categoryId,
     rated: '5',
     loc:{
       type: 'Point',
       coordinates : [serviceLocationParam.lng, serviceLocationParam.lat]
     }
   });
   console.log(req.header('Authorization').split(" ")[1]);

   let authGoogleTokenId = req.header('Authorization').split(" ")[1];
   let auth = new GoogleAuth;
   let client = new auth.OAuth2('223799517184-ol45hi3800k1a0psres5f1iklpa7vngu.apps.googleusercontent.com', '', '');
    client.verifyIdToken(
        authGoogleTokenId,
        '223799517184-ol45hi3800k1a0psres5f1iklpa7vngu.apps.googleusercontent.com',
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
        function(e, login) {
          if(e){
            console.log("Error start");
            console.log(e);
            console.log("Error End");
            res.status(401).json({ message: "Unauthorized"
                               ,data: serviceLocationObj})
          }else{
            var payload = login.getPayload();
            var userid = payload['sub'];
            console.log(userid)
             serviceLocationObj.save(function(err, serviceLocation){
               if(err) {
                 return err;
               }
               else{
                 res.status(201).json({ message: "Thanks! Your request was submitted successfuly!"
                                    ,data: serviceLocation})
               }
             })
          }
        });
}

exports.getServiceLocation = function(req, res, next){
  ServiceLocation.find({}, function(err, serviceLocations){
    if(err) {return next(err);}
    res.status(200).json({ message: "Thanks! Your request was displayed successfuly!"
                        , data: serviceLocations})
    next();
  })
}

exports.getNearbyServiceLocation = function(req, res, next){
  ServiceLocation.find({
    'loc':{
      $geoWithin:{
        $centerSphere: [[req.query.lng, req.query.lat], req.query.radius/6378.1]
      }
    }
  }, function(err, serviceLocations){
    if(err) {return next(err);}
    res.status(200).json({ message: "Thanks! Your request was displayed successfuly!"
                        , data: serviceLocations})
    next();
  })
}

exports.getServiceLocationByCategory = function(req, res, next){
  ServiceLocation.find({
    'category': req.query.categoryId,
    'loc':{
      $geoWithin:{
        $centerSphere: [[req.query.lng, req.query.lat], req.query.radius/6378.1]
      }
    }
  }, function(err, serviceLocations){
    if(err) {return next(err);}
    res.status(200).json({ message: "Thanks! Your request was displayed successfuly!"
                        , data: serviceLocations})
    next();
  })
}
