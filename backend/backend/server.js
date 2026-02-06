const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/student-dashboard', { useNewUrlParser: true, useUnifiedTopology: true });

const authRoutes = require('./routes/auth');
const timetableRoutes = require('./routes/timetable');
const postRoutes = require('./routes/posts');
const dashboardRoutes = require('./routes/dashboard');

app.use('/api/auth', authRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));
