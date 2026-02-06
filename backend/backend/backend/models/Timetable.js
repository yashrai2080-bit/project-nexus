const mongoose = require('mongoose');
const timetableSchema = new mongoose.Schema({
  studentId: String,
  day: String,
  time: String,
  course: String,
  faculty: String,
  room: String,
});
module.exports = mongoose.model('Timetable', timetableSchema);
