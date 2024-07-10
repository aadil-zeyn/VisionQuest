const express = require('express');
const router = express.Router();
const challengesController = require('../controllers/challengesController');

router.get('/', challengesController.listChallenges);
router.get('/search', challengesController.searchChallenges);

module.exports = router;
