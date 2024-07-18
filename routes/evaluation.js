import { Router } from 'express';
const router = Router();
import { evaluateSolution } from '../controllers/evaluationController.js';

router.post('/:challengeId/evaluate', evaluateSolution);

export default router;
