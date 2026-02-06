const express = require('express');
const Timetable = require('../models/Timetable');
const Notification = require('../models/Notification');
const router = express.Router();

router.get('/', async (req, res) => {
  const { studentId } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const timetable = await Timetable.find({ studentId, day: today });
  const notifications = await Notification.find({ studentId });
  const attendance = 85; // Dummy
  const examCountdown = Math.floor((new Date('2023-12-01') - new Date()) / (1000 * 60 * 60 * 24));
  res.json({ timetable, notifications, attendance, examCountdown });
});

module.exports = router;
