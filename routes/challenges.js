const express = require('express');
const router = express.Router();
const challengesController = require('../controllers/challengesController');

// POST Temp API for creating challenges
router.post('/', challengesController.createChallenge);

router.get('/', challengesController.listChallenges);
router.get('/search', challengesController.searchChallenges);

module.exports = router;
