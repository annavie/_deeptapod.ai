const { Router } = require('express');
const viewController = require('../controllers/viewController');
const { requireAuth,
  checkUser, 
  checkEmailToken,
  isEmailConfirmed} = require('../middlewares/authMiddleware');

const router = Router();

router.get('/dashboard', requireAuth, checkUser, isEmailConfirmed, viewController.dashboardGet);
router.get('/reference', requireAuth, checkUser, isEmailConfirmed, viewController.referenceGet);
router.get('/:token', requireAuth, checkUser, checkEmailToken, viewController.dashboardGet);
module.exports = router;
