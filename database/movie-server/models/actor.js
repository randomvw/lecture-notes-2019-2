module.exports = (sequelize, Sequelize) => {
  return sequelize.define('actor', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
  }, { freezeTableName: true });
}