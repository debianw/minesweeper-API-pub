//
const minesweeper = require('../../lib/minesweeper');
const Game = require('./model');

/**
 * Create a game
 */

const createGame = ({ colsSize, rowsSize, totalBombs }) => {
  const game = minesweeper.create({ colsSize, rowsSize, totalBombs });
  return Game.create(game);
};

/**
 * Reveal cell
 */

const revealCell = async ({ gameId, cell }) => {
  const game = await Game.findOne({ _id: gameId });

  if (!game) {
    const error = new Error('Game not found');
    error.statusCode = 401;
    throw error;
  }

  const { grid } = game;
  const { coords } = cell;

  const cellToUpdate = grid[coords.x][coords.y];
  cellToUpdate.reveal = true;

  // reveal all if is a BOMB!
  if (cellToUpdate.hasBomb) game.gameOver = true;

  await Game.findOneAndUpdate(
    { _id: gameId },
    { $set: { grid, gameOver: game.gameOver, revealAll: game.revealAll } }
  );

  return game.gameOver ? { gameOver: true } : cellToUpdate;
};

/**
 * Return the list of games
 */

const listOfGames = () => Game.find({ isActive: true });

/**
 * Return a single game
 */

const findGame = id => Game.findOne({ _id: id });

//
module.exports = {
  listOfGames,
  findGame,
  createGame,
  revealCell,
};
