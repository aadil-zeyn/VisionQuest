require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const challengesRouter = require('./routes/challenges');
const evaluationRouter = require('./routes/evaluation');
const leaderboardRouter = require('./routes/leaderboard');
const questionsRouter = require('./routes/questions');
const healthCheck = require('./routes/health')

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/challenges', challengesRouter);
app.use('/api/challenges', evaluationRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/questions', questionsRouter);
app.use('',healthCheck);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
