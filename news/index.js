const express = require('express');
const stories = require('./stories.json');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).send('pong!');
});

app.get('/stories', (req, res) => {
  res.status(200).json(stories);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));