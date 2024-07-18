import Challenge from '../models/challenge.js';

export async function evaluateSolution(req, res) {
  const { challengeId } = req.params;
  const { solution } = req.body;
  try {
    // Fetch the challenge by ID
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    // solution to be evaluated for the time returning False
    let isSolutionCorrect = false;
    

    res.json({ 
      message: 'Solution evaluated', 
      challengeId, 
      isSolutionCorrect 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error evaluating solution', error });
  }
}
