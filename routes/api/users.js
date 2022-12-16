const express = require('express');
const router  = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//all paths start with '/api/users'

//POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// Post /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users/profile-info
router.post('/profile-info', ensureLoggedIn, usersCtrl.profileInfo);

module.exports = router