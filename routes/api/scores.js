const express = require('express');
const router  = express.Router();
const scoresCtrl = require('../../controllers/api/scores');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//POST api/scores/addScore
router.post('/add-score', scoresCtrl.addProfileScore)


module.exports = router