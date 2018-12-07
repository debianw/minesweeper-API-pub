//
const express = require('express');
const controller = require('./controller');

const app = express.Router();

/**
 * Returns the list of games
 */

app.get('/', async (req, res, next) => {
  try {
    const list = await controller.listOfGames();

    res.json(list);
  } catch (err) {
    next(err);
  }
});

//
app.get('/:id', () => {
  throw new Error('Get single game not implemented');
});

/**
 * Create game
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

//
app.put('/:id', () => {
  throw new Error('Update game not implemented');
});

/**
 * Reveal cell
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
