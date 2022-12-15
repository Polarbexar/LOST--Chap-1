const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  highScore: number,
  scores: [scoreSchema],
}, {timestamps: true
});

const scoreSchema = new Schema({
  score: number
}, {timestamps: true
});