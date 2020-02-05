const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('My app now listening on port 3000');
});
