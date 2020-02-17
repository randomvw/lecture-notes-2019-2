module.exports = (sequelize, Sequelize) => {
  return sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phone: Sequelize.STRING,
  }, {
    setterMethods: {
      fullName(value) {
        let names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    freezeTableName: true
  });
}
