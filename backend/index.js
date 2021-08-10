const express = require('express')
const app = express()

// These are required for making the HTTP call to the weather API.
// Dotenv is creating prcoess environment variables so that the weather API key can be stored in a seperate .env file.
require('dotenv').config()
const fetch = require('node-fetch')
const APIKey = process.env.WEATHER_API_KEY

const locationIDMap = require('./locationMap')




const fetchWeatherData = async (locationID) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${locationID}&units=imperial&appid=${APIKey}`)
        const json = await res.json()
        return json
    }
    catch(error) {
        console.log(error)
    }
}


(async () => {
    const chicagoWeather = await fetchWeatherData(locationIDMap.get('chicago'))
    console.log(`Chicago: ${chicagoWeather.main.temp} \u00B0F ${chicagoWeather.weather[0].description}`)
})();

(async () => {
    const fortMyersWeather = await fetchWeatherData(locationIDMap.get('fort myers'))
    console.log(`Fort Myer: ${fortMyersWeather.main.temp} \u00B0F ${fortMyersWeather .weather[0].description}`)
})();

(async () => {
    const siouxFallsWeather = await fetchWeatherData(locationIDMap.get('sioux falls'))
    console.log(`Sioux Falls: ${siouxFallsWeather.main.temp} \u00B0F ${siouxFallsWeather.weather[0].description}`)
})();