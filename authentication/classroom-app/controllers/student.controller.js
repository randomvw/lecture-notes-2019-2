const Student = require('../db').Student;

exports.addStudent = async (req, res) => {
  res.render('add-edit');
}

exports.listStudents = async (req, res) => {
  let students = await Student.findAll({ where: { userId: req.user.id }, order: [['lastName', 'ASC']] });

  res.render('list', { students, flashes: req.flash('success') });
}

exports.updateStudent = async (req, res) => {
  req.body.userId = req.user.id;
  await Student.upsert(req.body);
  res.redirect('/');
}

exports.deleteStudent = async (req, res) => {
  let id = req.params.id;
  await Student.destroy({ where: { id } })
  res.redirect('/');
}

exports.editStudent = async (req, res) => {
  let id = req.params.id;
  let student = await Student.findByPk(id);

  res.render('add-edit', { student });
}