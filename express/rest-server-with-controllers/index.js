const express = require('express');
//! Added import of puppy controller
const puppyController = require('./controllers/puppy-controller');

const app = express();

app.use(express.json());

//! Add a puppy - referenced addOne from the controller
app.post('/puppies', puppyController.addOne);

//! Get all puppies - referenced getAll from the controller
app.get('/puppies', puppyController.getAll);

//! Get one puppy - referenced getOne from the controller
app.get('/puppies/:id', puppyController.getOne);

//! Update one puppy - referenced updateOne from the controller
app.put('/puppies/:id', puppyController.updateOne);

//! Delete one puppy - referenced deleteOne from the controller
app.delete('/puppies/:id', puppyController.deleteOne);

app.listen(3000, () => {
  console.log('Now listening on port 3000');
})
