//
const express = require('express');
const controller = require('./controller');

const app = express.Router();

/**
 * @api {get} /api/minesweeper List all games
 * @apiVersion 1.0.0
 * @apiName listOfGames
 * @apiSuccess {Object[]} games List of games.
 * @apiSuccess {String} _id Unique id.
 * @apiSuccess {Boolean} gameOver Specify if game is over.
 * @apiSuccess {Boolean} revealAll Specify game should be reveal.
 * @apiSuccess {Number} colsSize Number of columns.
 * @apiSuccess {Number} rowsSize Number of rows.
 * @apiSuccess {Number} totalBombs Total of bombs in the game.
 * @apiSuccess {Object[][]} grid Grid of cells.
 * @apiSuccess {Boolean} isActive Specify if game is active.
 */

app.get('/', async (req, res, next) => {
  try {
    const list = await controller.listOfGames();

    res.json(list);
  } catch (err) {
    next(err);
  }
});

/**
 * @api {get} /api/minesweeper/:id Retrieve a game
 * @apiversion 1.0.0
 * @apiName findGame
 * @apiExample {js} Example usage:
 * $http.get(url)
 *    .success((res, status) => doSomething())
 *    .error((err, status) => doSomething())
 * @apiSuccess {Object[]} games List of games.
 * @apiSuccess {String} _id Unique id.
 * @apiSuccess {Boolean} gameOver Specify if game is over.
 * @apiSuccess {Boolean} revealAll Specify game should be reveal.
 * @apiSuccess {Number} colsSize Number of columns.
 * @apiSuccess {Number} rowsSize Number of rows.
 * @apiSuccess {Number} totalBombs Total of bombs in the game.
 * @apiSuccess {Object[][]} grid Grid of cells.
 * @apiSuccess {Boolean} isActive Specify if game is active.
 */

app.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await controller.findGame(id);

    if (!game) {
      res.status(404).json({ message: 'Game not found' });
      return;
    }

    res.json(game);
  } catch (err) {
    next(err);
  }
});

/**
 * @api {post} /api/minesweeper Create a game
 * @apiversion 1.0.0
 * @apiName createGame
 * @apiExample {js} Example usage:
 * const data = {
 *  colsSize: 5,
 *  rowsSize: 5,
 *  totalBombs: 5,
 * };
 *
 * $http.post(url, data)
 *    .success((res, status) => doSomething())
 *    .error((err, status) => doSomething())
 */

app.post('/', async (req, res, next) => {
  try {
    const options = req.body;
    const game = await controller.createGame(options);

    res.json(game);
  } catch (err) {
    next(err);
  }
});

/**
 * @api {post} /api/minesweeper/:id/reveal-cell Reveal a Cell
 * @apiversion 1.0.0
 * @apiName revealCell
 * @apiExample {js} Example usage:
 * const data = {
 *  coords: {
 *    x: 2,
 *    y: 2,
 *  },
 *  hasBomb: true,
 *  reveal: false,
 *  value: 0,
 * };
 *
 * $http.post(url, data)
 *    .success((res, status) => doSomething())
 *    .error((err, status) => doSomething())
 *
 * @apiSuccess {Object} coords Cell coordinates
 * @apiSuccess {Number} coords.x X coord
 * @apiSuccess {Number} coords.y Y coord
 * @apiSuccess {Boolean} hasBomb Specify if cell contains a bomb
 * @apiSuccess {Boolean} reveal Specify if cell is revealed
 * @apiSuccess {Number} value Number of neighbor's bombs
 */

app.post('/:id/reveal-cell', async (req, res, next) => {
  try {
    const cell = req.body;
    const gameId = req.params.id;

    const cellRevealed = await controller.revealCell({ gameId, cell });

    res.json(cellRevealed);
  } catch (err) {
    next(err);
  }
});

//
module.exports = app;
