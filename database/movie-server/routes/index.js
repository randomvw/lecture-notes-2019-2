const router = require('express').Router();
const movieController = require('../controllers/movie-controller');
const actorController = require('../controllers/actor-controller');

router.get('/movies', movieController.getAll);
router.post('/movies', movieController.addOne);
router.get('/movies/:id', movieController.getOne);
router.put('/movies/:id', movieController.updateOne);
router.delete('/movies/:id', movieController.deleteOne);
router.get('/actors', actorController.getAll);
router.post('/actors', actorController.addOne);
router.get('/actors/:id', actorController.getOne);
router.put('/actors/:id', actorController.updateOne);
router.delete('/actors/:id', actorController.deleteOne);
router.put('/relationships', movieController.addRelationship);

module.exports = router;
