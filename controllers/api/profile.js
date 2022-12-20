const User = require('../../models/user');
const Profile = require('../../models/profile');
const jwt = require('jsonwebtoken')

module.exports = {
 getUserProfile,
};

async function getUserProfile(req, res) {
  // if (req.user._id === null) {
  //   return
  // } else 
  const profile = await Profile.findOne({user: req.user._id});
  res.json(profile)
}