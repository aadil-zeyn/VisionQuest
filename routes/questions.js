const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.get('/', questionsController.listRecentQuestions);
router.post('/solution/:questionId', questionsController.storeSolution);

module.exports = router;
