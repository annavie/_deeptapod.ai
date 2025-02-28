const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signupGet);
router.post('/signup', authController.signupPost);
router.get('/signin', authController.signinGet);
router.post('/signin', authController.signinPost);
router.get('/signout', authController.signoutGet);
router.get('/confirmation', authController.confirmationGet)
module.exports = router;
