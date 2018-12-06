//
const minesweeper = require('../../lib/minesweeper');

/**
 * Create a game
 */

const createGame = async ({ colsSize, rowsSize, totalBombs }) => {
  const game = minesweeper.create({ colsSize, rowsSize, totalBombs });

  return game;
};

/**
 * Return the list of games
 */

const listOfGames = async () => [];

//
module.exports = {
  listOfGames,
  createGame,
};
