require('dotenv').config();

const express = require('express');
const app = express();
const challengesRouter = require('./routes/challenges');
const evaluationRouter = require('./routes/evaluation');
const leaderboardRouter = require('./routes/leaderboard');
const questionsRouter = require('./routes/questions');

app.use(express.json());

app.use('/api/challenges', challengesRouter);
app.use('/api/challenges', evaluationRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/questions', questionsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
