const Sequelize = require('sequelize');
const StudentModel = require('./models/student');
const UserModel = require('./models/user');
const RoleModel = require('./models/role');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Student = StudentModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Role = RoleModel(sequelize, Sequelize);

User.hasMany(Student);
Student.belongsTo(User);
User.belongsTo(Role);

sequelize.sync()
  .then(() => console.log('Tables are created!'))
  .then(() => {
    return Role.bulkCreate([
      { id: 0, name: 'Blocked' },
      { id: 1, name: 'User' },
      { id: 2, name: 'Admin' },
    ], { updateOnDuplicate: [ 'name' ] })
  })

module.exports = {
  Student,
  User,
  Role,
}
