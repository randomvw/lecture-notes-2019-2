const router = require('express').Router();
const messagingController = require('../controllers/messaging.controller');

router.post('/sendMessage', messagingController.sendMessage);

module.exports = router;