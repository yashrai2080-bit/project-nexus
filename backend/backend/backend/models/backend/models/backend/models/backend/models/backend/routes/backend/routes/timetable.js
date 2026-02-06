const express = require('express');
const Timetable = require('../models/Timetable');
const router = express.Router();

router.get('/', async (req, res) => {
  const timetable = await Timetable.find({ studentId: req.query.studentId });
  res.json(timetable);
});

router.post('/', async (req, res) => {
  const { studentId, day, time, course, faculty, room } = req.body;
  // Conflict detection: Check if time/day overlaps
  const existing = await Timetable.findOne({ studentId, day, time });
  if (existing) return res.status(400).json({ message: 'Conflict detected' });
  const newClass = new Timetable({ studentId, day, time, course, faculty, room });
  await newClass.save();
  res.json(newClass);
});

router.delete('/:id', async (req, res) => {
  await Timetable.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
