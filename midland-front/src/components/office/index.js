import React from 'react'

const degreeSymbol = '\u00B0F'

const Office = ({city, imageURL, temperature, description}) => {
    return(
        <span>
            <h2>{city}</h2>
            <img src={imageURL}></img>
            <div>{temperature}</div>
            <div>{description}</div>
        </span>)
}

export default Office