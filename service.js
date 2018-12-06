//
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

//
app.get('/', (req, res) => {
  res.json({ ok: true });
});

//
app.listen(port, () => {
  console.log(`Game listening on port ${port}`);
});
