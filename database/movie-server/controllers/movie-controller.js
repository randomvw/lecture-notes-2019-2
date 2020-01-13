const db = require('../db.js');
const Movie = db.Movie;

exports.getAll = async (req, res) => {
  try {
    let result = await Movie.findAll();
    res.json(result);
  }
  catch (error) {
    console.log(error);
  }
};

exports.addOne = async (req, res) => {
  let movieResult = await Movie.create(req.body);

  res.json(movieResult);
}

exports.getOne = async (req, res) => {
  const id = req.params.id;
  const result = await db.query(`SELECT * FROM movie WHERE id = ${id}`)

  if (!result.rows.length === 0) {
    res.status(404).send();
    return;
  }

  const movie = result.rows[0];
  res.json(movie);
}

exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const movie = req.body;

  let result = await db.query(`
    UPDATE movie SET
      title = '${movie.title}',
      releaseYear = '${movie.releaseYear}',
      director = '${movie.director}',
      rating = '${movie.rating}'
    WHERE id = ${id}
    RETURNING *
  `);

  if (result.rows.length === 0) {
    res.status(404).send();
    return;
  }

  res.json(result.rows[0]);
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  let result = await db.query(`
    DELETE FROM movie WHERE id = ${id}
    RETURNING *
  `)

  if (result.rows.length === 0) {
    res.status(404).send();
    return;
  }

  res.json(result.rows[0]);
}
