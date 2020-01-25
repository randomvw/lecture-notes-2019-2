const router = require('express').Router();
const studentController = require('../controllers/student.controller');
const User = require('../db').User;

router.get('/', studentController.listStudents);
router.get('/add', studentController.addStudent);
router.post('/update', studentController.updateStudent);
router.get('/delete/:id', studentController.deleteStudent);
router.get('/edit/:id', studentController.editStudent);
router.get('/register', (req, res) => res.render('register'));
router.post('/register', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.register(username, password, (error, registeredUser) => {
    if (error) {
      console.log(error.message);
      return res.status(500).send();
    }

    res.send("Created user: " + username);
  });
});

module.exports = router;
