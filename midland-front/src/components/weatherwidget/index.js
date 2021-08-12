import React from 'react'
import Office from '../office'

import {Wrapper, OfficeDisplay, WeatherHeader, WeatherText} from './WeatherWidget.styles'

const WeatherWidget = ({locations}) => {
    return (
        <Wrapper>
            <WeatherHeader>
                <WeatherText>MIDLAND WEATHER</WeatherText>
            </WeatherHeader>
            <OfficeDisplay>
                { locations.map((location, i) => {
                    return(<Office key={i} location={location}/>)})
                }
            </OfficeDisplay>

        </Wrapper>
    )
        
    
} 

export default WeatherWidget