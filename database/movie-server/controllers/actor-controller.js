const db = require('../db.js');
const Actor = db.Actor;
const Movie = db.Movie;

exports.getAll = async (req, res) => {
  try {
    const result = await Actor.findAll();
    res.json(result);
  }
  catch (error) {
    console.log(error);
  }
};

exports.addOne = async (req, res) => {
  const actorResult = await Actor.create(req.body);

  res.json(actorResult);
}

exports.getOne = async (req, res) => {
  const id = req.params.id;
  const actor = await Actor.findByPk(id, { include: [Movie] });

  if (!actor) {
    res.status(404).send();
    return;
  }

  res.json(actor);
}

exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const actor = req.body;

  const existingActor = await Actor.findByPk(id);

  if (!existingActor) {
    res.status(404).send();
    return;
  }

  const updatedActor = await existingActor.update(actor);

  res.json(updatedActor);
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;

  const foundActor = await Actor.findByPk(id);

  if (!foundActor) {
    res.status(404).send();
    return;
  }

  await foundActor.destroy();

  res.json(foundActor);
}
