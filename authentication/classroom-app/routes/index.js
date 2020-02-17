const router = require('express').Router();
const studentController = require('../controllers/student.controller');
const authController = require('../controllers/auth.controller');
const adminController = require('../controllers/admin.controller');

router.get('/register', authController.registerPage);
router.post('/register', authController.registerUser, authController.loginUser);
router.get('/login', authController.loginPage);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);
router.get('/auth/callback', authController.loginGithubCallback);
router.get('/loginGithub', authController.loginUserGithub);

router.use(authController.isLoggedIn); // Every route below requires authentication
router.get('/', authorizeRole([1, 2]), studentController.listStudents);
router.get('/add', authorizeRole([2]), studentController.addStudent);
router.post('/update', authorizeRole([1, 2]), studentController.updateStudent);
router.get('/delete/:id', authorizeRole([2]), studentController.deleteStudent);
router.get('/edit/:id', authorizeRole([1, 2]), studentController.editStudent);
router.get('/admin', checkIsAdmin, adminController.adminPage);
router.post('/updateRoles', authorizeRole([2]), adminController.updateRoles);

function authorizeRole(roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.roleId)) {
      return next();
    }
    res.status(401).render('unauthorized');
  }
}

function checkIsAdmin(req, res, next) {
  if (req.user.isAdmin) {
    return next();
  }
  res.status(401).send('unauthorized');
}

module.exports = router;
