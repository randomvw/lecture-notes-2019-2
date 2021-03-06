const Sequelize = require('sequelize');
const StudentModel = require('./models/student');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Student = StudentModel(sequelize, Sequelize);

sequelize.sync().then(() => console.log('Tables are created!'));

module.exports = {
  Student
}
