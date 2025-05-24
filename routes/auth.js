const express = require('express')
const router = express.Router();
const authController = require('../controller/authController');
const limitter = require('../middleware/rateLimitter');

router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(limitter, authController.login)


module.exports = router