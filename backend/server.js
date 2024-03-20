require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

const product_route = require('./routes/productRoute')
const ErrorHandler = require('./middleware/error')

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('connec to db successfull');
})
.catch((error) => {
    console.log('error in connection', error)
})

app.use(bodyParser.json())
app.use('/api/v1',product_route)
app.use(ErrorHandler)

// middleware for error


app.listen(process.env.PORT, () => {
    console.log('server up and running')
})