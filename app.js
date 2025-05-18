const express = require('express');
const { PORT } = require('./config/env');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')
const auth = require('./routes/auth')
const books = require('./routes/books')
const orders = require('./routes/orders')


// Connect to postgresql database server
connectDB();

const app = express();

// Middleware
app.use(express.json())

// routes
app.use('/api/bookstore', auth)
app.use('/api/bookstore', books)
app.use('/api/bookstore', orders)

// Middleware
app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})

