const express = require('express')
const app = express()

const port = 8080

// Dotenv is creating prcoess environment variables so that the weather API key can be stored in a seperate .env file.
require('dotenv').config()

const weather = require('./routes/weather')
app.use('/api/weather', weather)




app.listen(port,() =>{
    console.log(`Server started at ${port}`)
})