const mongoose  = require('mongoose'),
      Schema = mongoose.Schema;

const TodoSchma = new Schema({
  id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('todo', TodoSchma);
