const express = require('express');
const router = express.Router();
const evaluationController = require('../controllers/evaluationController');

router.post('/:challengeId/evaluate', evaluationController.evaluateSolution);

module.exports = router;
