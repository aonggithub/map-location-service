const mongoose  = require('mongoose'),
      Schema = mongoose.Schema;

const ServiceLocationSchma = new Schema({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lat: {
      type: String,
      required: true
    },
    lng: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    rated: {
      type: Number,
      required: false,
    }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('serviceLocations', ServiceLocationSchma, 'serviceLocations');
