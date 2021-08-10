import React from 'react'
import Office from '../office'

const WeatherWidget = ({locationWeatherData}) => (
    locationWeatherData.map(locationWeather => {
        return <Office {...locationWeather}/>
    })
) 

export default WeatherWidget