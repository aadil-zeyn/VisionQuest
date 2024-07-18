import { Router } from 'express';
const router = Router();
import { getLeaderboard, viewProfile } from '../controllers/leaderboardController.js';

router.get('/', getLeaderboard);
router.get('/profile/:studentId', viewProfile);

export default router;
