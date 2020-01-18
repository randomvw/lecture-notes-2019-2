const db = require('../db.js');
const Movie = db.Movie;

exports.getAll = async (req, res) => {
  try {
    const result = await Movie.findAll();
    res.json(result);
  }
  catch (error) {
    console.log(error);
  }
};

exports.addOne = async (req, res) => {
  const movieResult = await Movie.create(req.body);

  res.json(movieResult);
}

exports.getOne = async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findByPk(id);

  if (!movie) {
    res.status(404).send();
    return;
  }

  res.json(movie);
}

exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const movie = req.body;

  const existingMovie = await Movie.findByPk(id);

  if (!existingMovie) {
    res.status(404).send();
    return;
  }

  const updatedMovie = await existingMovie.update(movie);

  res.json(updatedMovie);
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;

  const foundMovie = await Movie.findByPk(id);

  if (!foundMovie) {
    res.status(404).send();
    return;
  }

  await foundMovie.destroy();

  res.json(foundMovie);
}
