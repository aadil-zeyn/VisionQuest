import { Router } from 'express';
import { createChallenge, listChallenges, searchChallenges } from '../controllers/challengesController.js';

const router = Router();

// POST Temp API for creating challenges
router.post('/', createChallenge);

router.get('/', listChallenges);
router.get('/search', searchChallenges);

export default router;
