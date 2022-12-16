const User = require('../../models/user');
const Profile = require('../../models/profile');
const jwt = require('jsonwebtoken')

module.exports = {
 getUserProfile,
};

async function getUserProfile(req, res) {
  const profile = await Profile.find({user: req.user._id});
  res.json(profile)
}