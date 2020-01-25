const Sequelize = require('sequelize');
const StudentModel = require('./models/student');
const UserModel = require('./models/user');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Student = StudentModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

User.hasMany(Student);
Student.belongsTo(User);

sequelize.sync().then(() => console.log('Tables are created!'));

module.exports = {
  Student,
  User,
}
