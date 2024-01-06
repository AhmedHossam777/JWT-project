const express = require('express');
const authController = require('../controllers/main');
const authMiddleware = require('../middleware/auth');


const router = express.Router();


router.route('/dashboard').get(authMiddleware,authController.dashboard);
router.route('/login').post(authController.login);



module.exports = router;