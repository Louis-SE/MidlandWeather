const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express()
const port = process.env.PORT || 8080

const path = require('path')

// Cors is needed for getting around Access-Control-Allow-Origin requirements when the app is pushed to Heroku.
const cors = require('cors')
app.use(cors())

// Dotenv is creating prcoess environment variables so that the weather API key can be stored in a seperate .env file.
require('dotenv').config()

const weather = require('./routes/weather')
app.use('/api/weather', weather)

app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'))
})


const server = app.listen(port,() =>{
    console.log(`Server started at ${port}`)
})

module.exports = {server, app}