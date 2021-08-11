import React, { useState, useEffect } from 'react'

const degreeSymbol = '\u00B0'

const baseURL = 'http://localhost:8080/api/weather'


const getAPIWeather = async (location) => {
    const endPoint = `${baseURL}/${location}`
    return await (await fetch(endPoint)).json();
}

const defaultCity = 'Default City'
const defaultIcon = '01d'
const defaultTemperature = 0
const defaultDescription = 'Default Description'



const Office = ({location}) => {
    const [city, setCity] = useState (defaultCity)
    const [icon, setIcon] = useState (defaultIcon)
    const [temperature, setTemperature] = useState (defaultTemperature)
    const [description, setDescription] = useState (defaultDescription)
    
    const fetchWeather = async(location) => {
        try {
            const weatherData = await getAPIWeather(location)
            setCity(weatherData.city)
            setIcon(weatherData.icon)
            setTemperature(weatherData.temperature)
            setDescription(weatherData.description)
        }
        catch(error) {
            console.log(error)
            setCity(location)
            setIcon('01d')
            setTemperature(-500)
            setDescription('Error retrieving data')
        }
    }

    useEffect(()=> {
        fetchWeather(location)
    }, [])

    return (
        <span>
            <div>{city}</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description}.png`}></img>
            <div>{`Currently ${temperature}${degreeSymbol} F`}</div>
            <div>{description}</div>
        </span>
    )

}


export default Office