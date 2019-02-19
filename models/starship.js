const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StarshipSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  speed: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Starship = mongoose.model('starship', StarshipSchema);
