import { compileCode } from "./compiler.js";

const runTestCases = async (code, language, testCases) => {
    let results = [];
    let passedCount = 0;
  
    for (const testCase of testCases) {
      const result = await compileCode(code, language, testCase.input);
      const passed = result.output.trim() === testCase.expectedOutput.trim();
      if (passed) {
        passedCount++;
      }
      results.push({
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: result.output.trim(),
        passed
      });
    }
  
    return {
      results,
      summary: `${passedCount} out of ${testCases.length} passed`
    };
  };

  export default runTestCases