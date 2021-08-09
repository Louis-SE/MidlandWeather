require('dotenv').config()

const fetch = require('node-fetch')

const express = require('express')
const app = express()

const APIKey = process.env.WEATHER_API_KEY

const chicagoWeatherID = 4887398
const fortMyersWeatherID = 4155995
const siouxFallsWeatherID = 5231851

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${fortMyersWeatherID}&appid=${APIKey}`)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.log(`Error Found: ${error}`))