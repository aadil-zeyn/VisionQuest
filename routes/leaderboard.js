const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

router.get('/', leaderboardController.getLeaderboard);
router.get('/profile/:studentId', leaderboardController.viewProfile);

module.exports = router;
