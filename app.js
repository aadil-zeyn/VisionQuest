import dotenv from "dotenv"

import express, { json } from 'express';
import { connect } from 'mongoose';
const app = express();
import challengesRouter from './routes/challenges.js';
import evaluationRouter from './routes/evaluation.js';
import leaderboardRouter from './routes/leaderboard.js';
import questionsRouter from './routes/questions.js';
import healthCheck from './routes/health.js';

app.use(json());

dotenv.config();

const PORT = process.env.PORT || 3000;

connect(process.env.MONGODB_URI).then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }).catch(err => console.log("Error connecting MongoDB",err));

app.use('/api/challenges', challengesRouter);
app.use('/api/challenges', evaluationRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/questions', questionsRouter);
app.use('',healthCheck);



