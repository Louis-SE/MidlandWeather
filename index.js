const express = require('express')
const app = express()

const port = (process.env.port ? process.env.port  :  8080)

// This was to resolve an issue with the client not being able to make API requests to the server.
app.use(function (req, res, next) {
    // https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Dotenv is creating prcoess environment variables so that the weather API key can be stored in a seperate .env file.
require('dotenv').config()

const weather = require('./routes/weather')
app.use('/api/weather', weather)


app.listen(port,() =>{
    console.log(`Server started at ${port}`)
})