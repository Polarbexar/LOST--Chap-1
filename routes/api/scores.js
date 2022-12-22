const express = require('express');
const router  = express.Router();
const scoresCtrl = require('../../controllers/api/scores');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//POST api/scores/addScore
router.post('/add-score', scoresCtrl.addProfileScore)
//GET api/scores/high-scores
router.get('/high-scores', scoresCtrl.getHighScores)
//GET api/scores/user-high-scores
router.get('/user-high-scores', scoresCtrl.getUserScores)
//DELETE api/scores/delete-scores
router.delete('/delete-scores', scoresCtrl.deleteScores)


module.exports = router