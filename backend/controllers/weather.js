// These are required for making the HTTP call to the weather API.
const fetch = require('node-fetch')
const APIKey = process.env.WEATHER_API_KEY

const locationIDMap = require('../locationMap')



const getWeather = (req, res) =>  {
    console.log("request detected")

    const {city} = req.params
    console.log(`Retrieving data for ${city}`);

    const mappableCity = city.replace('/\s/g', '').toLowerCase()


    try {
        (async () => {
            const locationWeather = await fetchWeatherData(locationIDMap.get(mappableCity))
            res.json(locationWeather)
        })();
    }
    catch(error) {
        console.log(error)
        res.status(404).json({Status: 'Error', Message: 'Unable to processes request'})
    }

}

const fetchWeatherDataTemp = async(locationID) => {
    // Returns an object so that the weather API dones't have to be constantly accessed during development.
    const weatherData = {
        city: 'Temp City',
        temperature: 80,
        icon: '01d',
        description: 'Temp clear sky'
    }
    return weatherData
}

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


module.exports = {getWeather}