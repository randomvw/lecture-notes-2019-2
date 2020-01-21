const router = require('express').Router();
const savingsController = require('../controllers/savings.controller');

router.get('/', savingsController.getInputForm);
router.post('/calculateResults', savingsController.calculateResults);

module.exports = router;
