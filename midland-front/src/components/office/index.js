import React from 'react'

const degreeSymbol = '\u00B0'

const Office = ({city, imageURL, temperature, description}) => {
    return(
        <span>
            <div>{city}</div>
            <img src={imageURL}></img>
            <div>{`Currently ${temperature}${degreeSymbol} F`}</div>
            <div>{description}</div>
        </span>)
}

export default Office