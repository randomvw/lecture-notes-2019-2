const router = require('express').Router();
const movieController = require('../controllers/movie-controller');

router.get('/movies', movieController.getAll);
router.post('/movies', movieController.addOne);
router.get('/movies/:id', movieController.getOne);
router.put('/movies/:id', movieController.updateOne);
router.delete('/movies/:id', movieController.deleteOne);

module.exports = router;