module.exports = (sequelize, Sequelize) => {
  return sequelize.define('movie', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: Sequelize.STRING,
    releaseYear: Sequelize.STRING,
    director: Sequelize.STRING,
    rating: Sequelize.STRING,
  }, { freezeTableName: true });
}