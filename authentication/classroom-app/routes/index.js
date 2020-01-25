const router = require('express').Router();
const studentController = require('../controllers/student.controller');
const authController = require('../controllers/auth.controller');

router.get('/register', authController.registerPage);
router.post('/register', authController.registerUser);
router.get('/login', authController.loginPage);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);

router.use(authController.isLoggedIn); // Every route below requires authentication
router.get('/', studentController.listStudents);
router.get('/add', studentController.addStudent);
router.post('/update', studentController.updateStudent);
router.get('/delete/:id', studentController.deleteStudent);
router.get('/edit/:id', studentController.editStudent);

module.exports = router;
