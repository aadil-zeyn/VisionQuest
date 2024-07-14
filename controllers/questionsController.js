const Questions = require('../models/question')

exports.listRecentQuestions = (req, res) => {
    // Logic to list recent questions
    res.json({ message: 'List recent questions' });
  };
  
  exports.storeSolution = (req, res) => {
    // Logic to store solution
    res.json({ message: 'Store solution' });
  };
  