const express = require('express')
const router = express.Router()
const booksController = require('../controller/booksController');
const {authenticateToken} = require('../middleware/authenticateToken')
const {protectedRoute} = require('../middleware/protectedRoute')


router.route('/books')
    .post(authenticateToken, protectedRoute, booksController.addBook)
    .get(authenticateToken, protectedRoute, booksController.findBook)


module.exports = router