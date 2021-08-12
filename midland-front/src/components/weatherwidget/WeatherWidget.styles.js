import styled from 'styled-components'

export const Wrapper = styled.div`
    display: inline-block
    background: green;
    max-width: 1280px;
    min-width: 480px;
    margin: 20px 0px;
    padding 20px;
    border: 2px solid #F1F1F1;
    border-radius: 4px;
`

export const WeatherHeader = styled.div`

    display: flex;
    height: 32px;
    width: 100%;
    border-radius: 4px;
    background: #F1F1F1;
    opacity: 0.9;
`

export const WeatherText = styled.div`
    margin: auto;
    font-size: 0.9rem;
    font-weight: 400;
`

export const OfficeDisplay = styled.div`   
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

`