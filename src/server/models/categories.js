const mongoose  = require('mongoose'),
      Schema = mongoose.Schema;

const CategorySchma = new Schema({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('categories', CategorySchma, 'categories');
