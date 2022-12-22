const User = require('../../models/user');
const Profile = require('../../models/profile');
const { rawListeners } = require('../../models/profile');


module.exports = {
 addProfileScore,
 getHighScores,
 getUserScores,
 deleteScores,
};

async function addProfileScore(req, res) {
  const profile = await Profile.findOne({user: req.user._id});
  profile.scores.push(req.body);
  profile.scores.sort((a, b) => b.score - a.score);
  profile.scores.splice(5);
  const highScore = profile.scores.reduce((max, score) => Math.max(max, score.score), 0);
  profile.highScore = highScore;
  await profile.save();
  res.json(profile);
}

async function getHighScores(req, res) {
  const profiles = await Profile.find({})
  profiles.sort((a,b) => b.highScore - a.highScore)
  profiles.splice(5);
  res.json(profiles);
}

async function getUserScores(req, res) {
  const profile = await Profile.findOne({user: req.user._id})
  const scores = profile.scores.map((score) => score.score);
  res.json(scores)
}

async function deleteScores(req, res) {
  const profile = await Profile.updateOne(
    {user: req.user._id},
    {$set: {scores: []}});
    console.log(profile)
    const updatedProfile = await Profile.findOne({user: req.user._id})
    console.log(profile);
    res.json(updatedProfile)
  
}
