const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  role: String,
});
module.exports = mongoose.model('User', userSchema);
