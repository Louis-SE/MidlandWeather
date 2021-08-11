const express = require('express')
const app = express()

const port = 8080

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

        const weatherData = {
            city: json.name,
            temperature: json.main.temp,
            icon: (json.weather.length > 0 ? json.weather[0].icon : '01d'),
            description: (json.weather.length > 0 ? json.weather[0].description : 'clear sky')
        }

        return weatherData
    }
    catch(error) {
        console.log(error)
    }
}

app.get('/api/weather/:city', (req, res) => {
    const {city} = req.params
    console.log(`Retrieving data for ${city}`);

    const mappableCity = city.replace('/\s/g', '').toLowerCase()
    try {
        (async () => {
            const locationWeather = await fetchWeatherData(locationIDMap.get(mappableCity))
            console.log(locationWeather)
            res.json(locationWeather)
        })();
    }
    catch(error) {
        console.log(error)
        res.status(404).json({Status: 'Error', Message: 'Unable to processes request'})
    }

})

app.listen(port,() =>{
    console.log(`Server started at ${port}`)
})