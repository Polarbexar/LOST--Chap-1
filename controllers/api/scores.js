const User = require('../../models/user');
const Profile = require('../../models/profile');


module.exports = {
 addProfileScore,
};

async function addProfileScore(req, res) {
 const profile = await Profile.find({user: req.user._id})
 console.log(profile)
  await profile[0].scores.push(req.body.score)
  res.json(profile)
}