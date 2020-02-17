const passportLocalSequelize = require('passport-local-sequelize');

module.exports = (sequelize, Sequelize) => {
  let User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: Sequelize.STRING,
    hash: Sequelize.TEXT,
    salt: Sequelize.TEXT,
    roleId: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  }, {
    getterMethods: {
      isAdmin() {
        return this.roleId === 2;
      },
      async studentNames() {
        let students = await this.getStudents();
        return students.map(student => student.firstName + " " + student.lastName).join();
      }
    },
    freezeTableName: true
  });

  passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    hashField: 'hash',
    saltField: 'salt',
  });

  return User;
}
