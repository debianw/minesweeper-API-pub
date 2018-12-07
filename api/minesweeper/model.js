//
const mongoose = require('mongoose');

const { Schema } = mongoose;

//
const GridSchema = new Schema({
  reveal: { type: Boolean },
  value: { type: Number },
  hasBomb: { type: Boolean },
  coords: {
    x: { type: Number },
    y: { type: Number },
  },
});

//
const GameSchema = new Schema({
  gameOver: { type: Boolean, default: false },
  revealAll: { type: Boolean },
  colsSize: { type: Number },
  rowsSize: { type: Number },
  totalBombs: { type: Number },
  grid: [[{ type: GridSchema }]],
  isActive: { type: Boolean, default: true },
  _createdAt: { type: Date, default: Date.now },
});

//
module.exports = mongoose.model('Game', GameSchema);
