const puppies = [];
let id = 1;

exports.addOne = (request, response) => {
  let puppy = request.body;
  puppy.id = id;
  puppies.push(puppy);
  id++;
  response.json(puppy);
};

exports.getAll = (request, response) => {
  response.json(puppies);
}

exports.getOne = (request, response) => {
  const id = request.params.id;

  const puppy = puppies.find(puppy => puppy.id == id);

  if (puppy) {
    response.json(puppy);
  }
  else {
    response.status(404).send();
  }
}

exports.updateOne = (request, response) => {
  const id = request.params.id;

  for (let i = 0; i < puppies.length; i++) {
    if (puppies[i].id == id) {
      puppies[i] = request.body;
      puppies[i].id = Number.parseInt(id);
      response.json(puppies[i]);
    }
  }
  response.status(404).send();
}

exports.deleteOne = (request, response) => {
  const { id } = request.params;

  const index = puppies.findIndex(puppy => puppy.id == id);
  puppies.splice(index, 1);

  if (index >= 0) {
    response.status(200).send();
  }
  else {
    response.status(404).send();
  }
}