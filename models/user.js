const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  surName: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  goals: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true}
  },
  description: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
