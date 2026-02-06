const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  studentId: String,
  content: String,
  likes: [String],
  comments: [{ studentId: String, content: String }],
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Post', postSchema);
