import React from 'react'
import Office from '../office'

const WeatherWidget = ({locations}) => (
    locations.map(location => {
        return <Office {...locationWeather}/>
    })
) 

export default WeatherWidget