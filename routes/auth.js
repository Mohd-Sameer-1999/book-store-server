const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')

router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(authController.login)


module.exports = router