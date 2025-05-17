const express = require('express');
const {PORT} = require('./config/env');
const connectDB = require('./config/db')

const app = express();

// Connect to postgresql database server
connectDB();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})

