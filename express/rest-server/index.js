const express = require('express');
const app = express();

const puppies = [];
let id = 1;

app.use(express.json());

// Add a puppy
app.post('/puppies', (request, response) => {
  let puppy = request.body;
  puppy.id = id;
  puppies.push(puppy);
  id++;
  response.json(puppy);
});

// Get all puppies
app.get('/puppies', (request, response) => {
  response.json(puppies);
});

// Get one puppy
app.get('/puppies/:id', (request, response) => {
  const id = request.params.id;

  const puppy = puppies.find(puppy => puppy.id == id);

  if (puppy) {
    response.json(puppy);
  }
  else {
    response.status(404).send();
  }
});

// Update one puppy
app.put('/puppies/:id', (request, response) => {
  const id = request.params.id;

  for (let i = 0; i < puppies.length; i++) {
    if (puppies[i].id == id) {
      puppies[i] = request.body;
      puppies[i].id = Number.parseInt(id);
      response.json(puppies[i]);
    }
  }
  response.status(404).send();
});

// Delete one puppy
app.delete('/puppies/:id', (request, response) => {
  const { id } = request.params;

  const index = puppies.findIndex(puppy => puppy.id == id);
  puppies.splice(index, 1);

  if (index >= 0) {
    response.status(200).send();
  }
  else {
    response.status(404).send();
  }
});

app.listen(3000, () => {
  console.log('Now listening on port 3000');
})
