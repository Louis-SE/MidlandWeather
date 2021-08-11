import axios from 'axios'
import React, { useState, useEffect } from 'react'

const degreeSymbol = '\u00B0'

const baseURL = 'http://localhost:8080/api/weather'


const fetchWeather = async (location) => {
    const endPoint = `${baseURL}/${location}`
    return await (await fetch(endPoint)).json();
}

const Office = ({location}) => {
    const [city, setCity] = useState (location)
    const [icon, setIcon] = useState ('01d')
    const [temperature, setTemperature] = useState (-500)
    const [description, setDescription] = useState ('Loading Weather')




    const internalWeatherFetcher = async(location) => {
        try {
            const weatherData = await fetchWeather(location)
            console.log(weatherData)
        }
        catch(error) {
            
        }
    }

    useEffect(()=> {
        internalWeatherFetcher(location)
    }, [])

    return (
        <span>
            <div>{city}</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
            <div>{`Currently ${temperature}${degreeSymbol} F`}</div>
            <div>{description}</div>
        </span>
    )

}


export default Office