require('dotenv').config()
const  weather = require('../controllers/weather')
const cityIDMap = require('../controllers/cityMap')

let weatherData;

describe('fetchWeatherDataTemp()', () => {
    beforeAll(async () => {
        weatherData = await weather.fetchWeatherDataTemp('Any city')
    })


    it('should return an object with the desired fields', () => {
        expect(weatherData).toHaveProperty('city')
        expect(weatherData).toHaveProperty('temperature')
        expect(weatherData).toHaveProperty('icon')
        expect(weatherData).toHaveProperty('description')
    })
})

describe('fetchWeatherData()', () => {
    it('should return an object with the desired fields', async () => {
        weatherData = await weather.fetchWeatherData(cityIDMap.get('chicago'))
        expect(weatherData).toHaveProperty('city')
        expect(weatherData).toHaveProperty('temperature')
        expect(weatherData).toHaveProperty('icon')
        expect(weatherData).toHaveProperty('description')
    })

    it('should throw an error when given an unmapped city', async () => {
        await expect(weather.fetchWeatherData(cityIDMap.get('mars'))).rejects.toThrow()
    })
})