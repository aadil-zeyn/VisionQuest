import { Router } from 'express';
const router = Router();
import { evaluateSolution } from '../controllers/evaluationController.js';

router.post('/evaluate', evaluateSolution);

export default router;
