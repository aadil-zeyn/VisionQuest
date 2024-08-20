import { Router } from 'express';
import { createChallenge, fetchChallengeSet, listChallenges, searchChallengeById, searchChallenges } from '../controllers/challengesController.js';

const router = Router();

// POST Temp API for creating challenges
router.post('/', createChallenge);
router.get('/list', fetchChallengeSet);

router.get('/', listChallenges);
router.get('/search', searchChallenges);

router.get('/search/id',searchChallengeById)
export default router;
