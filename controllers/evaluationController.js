import Challenge from '../models/challenge.js';
import challengeDetails from '../models/challengeDetails.js';
import { compileCode } from '../utils/challengeEvaluation/compiler.js';
import runTestCases from '../utils/challengeEvaluation/runTestCases.js';

export async function evaluateSolution(req, res) {
  const { challengeId, action } = req.query; 
  const { code, language, input } = req.body;

  try {
    const response = await Challenge.findById(challengeId);
    if (!response) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    const challengeDetails_ = await challengeDetails.findOne({ challengeId: challengeId });

    if (!challengeDetails_) {
      return res.status(404).json({ message: 'Challenge details not found' });
    }

    const challenge = {
      challengeId: response._id,
      title: response.title,
      description: response.description,
      boilerplateCode: challengeDetails_.boilerplateCode,
      visibleTestCases: challengeDetails_.visibleTestCases,
      hiddenTestCases: challengeDetails_.hiddenTestCases
    };


    if (action === 'compile') {
      const result = await compileCode(code, language, input);
      return res.json({ message: 'Code compiled', result });
    } else if (action === 'visible') {
      const { results, summary } = await runTestCases(code, language, challenge.visibleTestCases);
      return res.json({ message: 'Visible test cases run', results, summary });
    } else if (action === 'hidden') {
      const { results, summary } = await runTestCases(code, language, challenge.hiddenTestCases);
      const isSolutionCorrect = results.every(result => result.passed);
      return res.json({
        message: 'Hidden test cases run',
        isSolutionCorrect,
        hiddenResults: results.map(result => ({
          input: result.input,
          actualOutput: result.actualOutput
        })),  
        summary
      });
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error evaluating solution', error });
  }
}
