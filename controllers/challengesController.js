import Challenge from '../models/challenge.js';
import ChallengeSet from '../models/challengeSet.js';
import ChallengeDetails from '../models/challengeDetails.js';


export async function createChallenge(req, res) {
  let { challenges, challengeSet } = req.body;

  try {
    if (!Array.isArray(challenges)) {
      challenges = [challenges];
    }

    let challengeSetId;
    
    if (challengeSet) {
      const newChallengeSet = await ChallengeSet.create({
        title: challengeSet.title,
        domain: challengeSet.domain,
        description: challengeSet.description,
        challengesList: []
      });
      challengeSetId = newChallengeSet._id;
      console.log("fghjk")
      console.log(newChallengeSet._id.toString())

    } else if (challenges[0].challengeSetId) {
      challengeSetId = challenges[0].challengeSetId;
    } else {
      return res.status(400).json({ message: 'No challenge set or challengeSetId provided.' });
    }
    console.log("here")
    const createdChallenges = [];

    for (const challenge of challenges) {
      const newChallenge = await Challenge.create({
        challengeSetId,
        title: challenge.title,
        description: challenge.description
      });
      console.log("here")

      console.log(challenge.visibleTestCases[0])
      
      await ChallengeDetails.create({
        challengeId: newChallenge._id,
        boilerplateCode: challenge.boilerplateCode,
        visibleTestCases: challenge.visibleTestCases,
        hiddenTestCases: challenge.hiddenTestCases
      });

      createdChallenges.push(newChallenge);
      console.log("heref")
      console.log(challengeSetId)
      const challengeSetToUpdate = await ChallengeSet.findById(challengeSetId);
      console.log("lollo")
      if (challengeSetToUpdate) {
        challengeSetToUpdate.challengesList.push(newChallenge._id);
        await challengeSetToUpdate.save();
      } else {
        return res.status(404).json({ message: 'ChallengeSet not found.' });
      }
    }

    res.status(201).json({
      message: 'Challenges created successfully',
      challenges: createdChallenges,
      challengeSetId
    });
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

export async function searchChallengeById(req, res) {
  const { id } = req.query; 
  try {
    const challenge = await Challenge.findById(id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    const challengeDetails = await ChallengeDetails.findOne({ challengeId: id });

    if (!challengeDetails) {
      return res.status(404).json({ message: 'Challenge details not found' });
    }
    console.log(challengeDetails)

    const response = {
      challengeId: challenge._id,
      title: challenge.title,
      description: challenge.description,
      boilerplateCode: challengeDetails.boilerplateCode,
      visibleTestCases: challengeDetails.visibleTestCases,
      hiddenTestCases: challengeDetails.hiddenTestCases
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving challenge', error });
  }
}

export async function fetchChallengeSet(req, res) {
  try {
    const challengeset = await ChallengeSet.find();
    res.json(challengeset);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving challenges', error });
  }
}