const Sequelize = require('sequelize');
const MovieModel = require('./models/movie');
const ActorModel = require('./models/actor');

// const sequelize = new Sequelize('movie', 'root', 'root', {
//   host: 'localhost',
//   port: 32771,
//   dialect: 'postgres'
// });
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Movie = MovieModel(sequelize, Sequelize);
const Actor = ActorModel(sequelize, Sequelize);

Movie.belongsToMany(Actor, { through: 'MovieActor' })
Actor.belongsToMany(Movie, { through: 'MovieActor' })

sequelize.sync().then(() => console.log('Tables are created!'));

module.exports = {
  Movie,
  Actor,
}
