const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  score: 0
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
  highScore: 0,
  scores: [scoreSchema],
}, {timestamps: true
});


module.exports = mongoose.model('Profile', profileSchema)