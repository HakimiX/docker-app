const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('it works!');
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Docker app is listening at http://localhost:${PORT}`);
});
