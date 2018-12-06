//
const express = require('express');
const bodyParser = require('body-parser');
const minesweeper = require('./api/minesweeper');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

//
app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.use('/api/minesweeper', minesweeper);

//
app.listen(port, () => {
  console.log(`Game listening on port ${port}`);
});
