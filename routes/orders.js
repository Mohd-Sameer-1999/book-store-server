const express = require('express')
const router = express.Router()
const ordersController = require('../controller/ordersController')
const { authenticateToken } = require('../middleware/authenticateToken')


router.route('/orders')
    .post(authenticateToken, ordersController.createOrder)
    
router.route('/orders/:id')
    .get(authenticateToken, ordersController.getOrder)    

module.exports = router