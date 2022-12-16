const express = require('express');
const router  = express.Router();
const profileCtrl = require('../../controllers/api/profile');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//GET api/pofile/info
router.get('/info', profileCtrl.getUserProfile)
module.exports = router
