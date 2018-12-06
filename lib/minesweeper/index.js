/**
 * Get random coords
 */

const _getRandomCoords = (rows, cols) => ({
  x: Math.floor(Math.random() * Math.floor(cols)),
  y: Math.floor(Math.random() * Math.floor(rows)),
});

/**
 * Put bombs to the game
 */

const _putBombs = game => {
  const { colsSize, rowsSize, totalBombs, grid } = game;
  const gridWithBombs = { ...grid };
  let count = 0;

  while (count < totalBombs) {
    const bombCoords = _getRandomCoords(rowsSize, colsSize);
    const { x, y } = bombCoords;

    const cell = gridWithBombs[x][y];
    if (!cell.hasBomb) {
      gridWithBombs[x][y] = { ...cell, hasBomb: true };
      count += 1;
    }
  }

  return { ...game, grid: gridWithBombs };
};

/**
 *
 */

const _putCellValues = game => {};

/**
 * Create grid
 */

const _createGrid = ({ colsSize = 0, rowsSize = 0 }) => {
  const grid = [];
  for (let x = 0; x < colsSize; x += 1) {
    grid[x] = [];
    for (let y = 0; y < rowsSize; y += 1) {
      grid[x][y] = { hasBomb: false, coords: { x, y } };
    }
  }

  return grid;
};

/**
 * Create game
 */

const create = ({ colsSize, rowsSize, totalBombs }) => {
  const grid = _createGrid({
    colsSize,
    rowsSize,
  });

  const game = {
    colsSize,
    rowsSize,
    totalBombs,
    grid,
  };

  return _putBombs(game);
};

//
module.exports = {
  create,
};
