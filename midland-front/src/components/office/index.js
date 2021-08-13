import React, { useState, useEffect } from 'react'
import {Wrapper, CityHeader, TextDisplay, ImageDisplay} from './Office.styles'

// const devURL = 'http://localhost:8080/api/weather'
const baseURL = 'https://midland-weather.herokuapp.com/api/weather'

const getAPIWeather = async (location) => {
    const endPoint = `${baseURL}/${location}`
    return await (await fetch(endPoint)).json();
}

const defaultCity = 'Default City'
const defaultIcon = '01d'
const defaultTemperature = 0
const defaultDescription = 'Default Description'

const degreeSymbol = '\u00B0'

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
        <Wrapper>
            <CityHeader>{city}</CityHeader>
            <ImageDisplay>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description}.png`}></img>
            </ImageDisplay>
            <TextDisplay>{`Current ${temperature}${degreeSymbol} F`}</TextDisplay>
            <TextDisplay>{description}</TextDisplay>
        </Wrapper>
    )

}


export default Office