import Challenge from '../models/challenge.js';
import { compileCode } from '../utils/compiler.js';
import runTestCases from '../utils/runTestCases.js';

export async function evaluateSolution(req, res) {
  const { challengeId, action } = req.query; 
  const { code, language, input } = req.body;

  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

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
