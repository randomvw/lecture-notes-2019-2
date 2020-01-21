const router = require('express').Router();
const studentController = require('../controllers/student.controller');

router.get('/', studentController.listStudents);
router.get('/add', studentController.addStudent);
router.post('/update', studentController.updateStudent);
router.get('/delete/:id', studentController.deleteStudent);
router.get('/edit/:id', studentController.editStudent);

module.exports = router;
