const postgres = require('pg');
const Sequelize = require('sequelize');
const MovieModel = require('./models/movie');

const sequelize = new Sequelize('movie', 'root', 'root', {
  host: 'localhost',
  port: 32771,
  dialect: 'postgres'
});

const Movie = MovieModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => console.log('Tables are created!'));

module.exports = {
  Movie,
}
