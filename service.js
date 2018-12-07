//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const minesweeper = require('./api/minesweeper');

const app = express();
const port = process.env.PORT || 3001;

// connect to db
mongoose
  .connect(
    'mongodb://dbusr:abc123@ds263380.mlab.com:63380/minesweeper-db',
    { useNewUrlParser: true }
  )
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

//
app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.use('/api/minesweeper', minesweeper);

//
app.listen(port, () => {
  console.log(`Game listening on port ${port}`);
});
