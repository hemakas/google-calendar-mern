require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const eventRoutes = require('./routes/events') // import event routes
const userRoutes = require('./routes/users') // import user routes

// express app
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/event', eventRoutes)
app.use('/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // fire up server
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Server running on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log('Faild to connect to the db ', error)
    })

