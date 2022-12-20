const User = require('../../models/user');
const Profile = require('../../models/profile');
const jwt = require('jsonwebtoken')

module.exports = {
 getUserProfile,
 updateProfile,
};

async function getUserProfile(req, res) {
  const profile = await Profile.findOne({user: req.user._id});
  res.json(profile)
}

async function updateProfile(req, res) {
  try {
  req.user.id = req.body._id
  const updatedProfile = await Profile.findOneAndUpdate(
    {user: req.user._id},
    req.body,
    {new: true}
  );
  res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({message: 'Error updating Profile'})
  }
}