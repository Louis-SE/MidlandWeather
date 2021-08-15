import React from 'react'
import Office from '../office'
import PropTypes from 'prop-types'

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

WeatherHeader.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.string)
}

export default WeatherWidget