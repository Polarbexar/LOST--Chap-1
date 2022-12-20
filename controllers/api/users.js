const User = require('../../models/user');
const Profile = require('../../models/profile')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  login,
  checkToken,
  profileInfo,
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user))
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}
async function profileInfo(req, res) {
  req.body.user = req.user._id;
  const profile = await Profile.create(req.body)
  console.log('req.user', req.user);
  console.log(req.body)
  res.json(profile);
}

/*-----Helper Function --*/

function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h'}
  );
};