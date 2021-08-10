require('dotenv').config()

const fetch = require('node-fetch')

const express = require('express')
const app = express()

const APIKey = process.env.WEATHER_API_KEY

const chicagoWeatherID = 4887398
const fortMyersWeatherID = 4155995
const siouxFallsWeatherID = 5231851


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
    const chicagoWeather = await fetchWeatherData(chicagoWeatherID)
    console.log(`Chicago: ${chicagoWeather.main.temp} \u00B0F ${chicagoWeather.weather[0].description}`)
})();

(async () => {
    const fortMyersWeather = await fetchWeatherData(fortMyersWeatherID)
    console.log(`Fort Myer: ${fortMyersWeather.main.temp} \u00B0F ${fortMyersWeather.weather[0].description}`)
})();

(async () => {
    const siouxFallsWeather = await fetchWeatherData(siouxFallsWeatherID)
    console.log(`Sioux Falls: ${siouxFallsWeather.main.temp} \u00B0F ${siouxFallsWeather.weather[0].description}`)
})();