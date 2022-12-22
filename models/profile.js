const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  score: Number
}, {timestamps: true
});

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  highScore: Number,
  scores: [scoreSchema],
}, {timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema)