import Challenge from '../models/challenge.js';

export async function createChallenge(req, res) {
  console.log("create challenge")
  let challenges  = req.body;

  try {
    if (!Array.isArray(challenges)) {
      challenges = [challenges];
    }

    const createdChallenges = await Challenge.create(challenges);
    res.status(201).json({ message: 'Challenges created successfully', challenges: createdChallenges });
  } catch (error) {
    res.status(500).json({ message: 'Error creating challenges', error });
  }
}

export async function listChallenges(req, res) {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving challenges', error });
  }
}

export async function searchChallenges(req, res) {
  const topic  = req.query;
  try {
    let query = {};
    
    if (topic) {
      query = { topic: { $regex: new RegExp(topic, 'i') } };
    }

    const challenges = await Challenge.find(query);

    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Error searching challenges', error });
  }
}
