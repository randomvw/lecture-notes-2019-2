const express = require('express');
const puppyController = require('./controllers/puppy-controller');

const app = express();

app.use(express.json());

app.route('/puppies')
  .post(puppyController.addOne)
  .get(puppyController.getAll);

app.route('/puppies/:id')
  .get(puppyController.getOne)
  .put(puppyController.updateOne)
  .delete(puppyController.deleteOne);

app.listen(3000, () => {
  console.log('Now listening on port 3000');
})
