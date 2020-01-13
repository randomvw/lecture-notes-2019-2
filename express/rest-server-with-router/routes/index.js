const router = require('express').Router();
const puppyController = require('../controllers/puppy-controller');

router.route('/puppies')
  .post(puppyController.addOne)
  .get(puppyController.getAll);

router.route('/puppies/:id')
  .get(puppyController.getOne)
  .put(puppyController.updateOne)
  .delete(puppyController.deleteOne);

module.exports = router;
