const { Router } = require('express');
const messageController = require('../controllers/messageController');

const router = Router();

router.post('/submit-message', messageController.messagePost);

module.exports = router;