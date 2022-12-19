const User = require('../../models/user');
const Profile = require('../../models/profile');


module.exports = {
 addProfileScore,
};

async function addProfileScore(req, res) {
 const profile = await Profile.findOne({user: req.user._id})
 console.log(profile)
  await profile.scores.push(req.body.score)
    
  console.log(profile)
  res.json(profile)
}