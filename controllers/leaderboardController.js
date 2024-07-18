import Leaderboard from "../models/leaderboard.js";

export async function getLeaderboard(req, res) {
    const { topic } = req.query
    console.log(topic)
    try{

      let query = {};
    
    if (topic) {
      query = { topic: { $regex: new RegExp(topic, 'i') } };
    }

    const challenges = await Leaderboard.find(query);

    res.json(challenges);

    }
    catch(error){
      res.status(500).json({ message: 'Error retrieving Leaderboard', error });
    }
  }
  
  export function   viewProfile(req, res) {
    // Logic to view profile
    res.json({ message: 'View profile' });
  }
  