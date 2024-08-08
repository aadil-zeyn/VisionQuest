import axios from 'axios';
import dotenv from 'dotenv';

const languageMap = {
    "c": { language: "c", version: "10.2.0" },
    "cpp": { language: "c++", version: "10.2.0" },
    "python": { language: "python", version: "3.10.0" },
    "java": { language: "java", version: "15.0.2" }
  };
  
dotenv.config();

const COMPILER_API = process.env.COMPILER_API;

export async function compileCode(code, language, input){
    if (!languageMap[language]) {
      throw new Error("Unsupported language");
    }
  
    const data = {
      language: languageMap[language].language,
      version: languageMap[language].version,
      files: [{ name: "main", content: code }],
      stdin: input
    };
  
    const config = {
      method: 'post',
      url: COMPILER_API,
      headers: { 'Content-Type': 'application/json' },
      data: data
    };
  
    const response = await axios(config);
    return response.data.run;
  };