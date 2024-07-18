import { Router } from 'express';
const router = Router();
import { listRecentQuestions, storeSolution } from '../controllers/questionsController.js';

router.get('/', listRecentQuestions);
router.post('/solution/:questionId', storeSolution);

export default router;
