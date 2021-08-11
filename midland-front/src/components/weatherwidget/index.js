import React from 'react'
import Office from '../office'

const WeatherWidget = ({locations}) => {
    return (
        <div>
            <h1>Loaded</h1>
            { locations.map(location => {return(<Office location={location}/>)})}
        </div>
    )
        
    
} 

export default WeatherWidget