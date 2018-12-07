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
  const gridWithBombs = [...grid];
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
 * Count neighbor's bombs
 */

const countNeighborsBombs = (cell, grid) => {
  const { coords } = cell;
  let count = 0;

  if (cell.hasBomb) return 0;

  [
    { x: -1, y: 0 },
    { x: -1, y: -1 },
    { x: -1, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ].forEach(adjacent => {
    if (grid[coords.x + adjacent.x] && grid[coords.x + adjacent.x][coords.y + adjacent.y]) {
      const neighborCell = grid[coords.x + adjacent.x][coords.y + adjacent.y];
      if (neighborCell.hasBomb) count += 1;
    }
  });

  return count;
};

/**
 * Put values in cells
 */

const _putCellValues = game => {
  const { colsSize, rowsSize, grid } = game;
  const gridWithValues = [...grid];

  for (let x = 0; x < colsSize; x += 1) {
    for (let y = 0; y < rowsSize; y += 1) {
      const cell = gridWithValues[x][y];
      if (!cell.hasBomb) {
        gridWithValues[x][y] = { ...cell, value: countNeighborsBombs(cell, grid) };
      }
    }
  }

  return { ...game, grid: [...gridWithValues] };
};

/**
 * Create grid
 */

const _createGrid = ({ colsSize = 0, rowsSize = 0 }) => {
  const grid = [];
  for (let x = 0; x < colsSize; x += 1) {
    grid[x] = [];
    for (let y = 0; y < rowsSize; y += 1) {
      grid[x][y] = { reveal: false, value: 0, hasBomb: false, coords: { x, y } };
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
    revealAll: false,
    colsSize,
    rowsSize,
    totalBombs,
    grid,
  };

  return _putCellValues(_putBombs(game));
};

//
module.exports = {
  create,
};
