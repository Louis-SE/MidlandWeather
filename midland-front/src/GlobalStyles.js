import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 1280px;
    }
    
    * {
        box-sizing: content-box;
        font-family: 'Helvetica', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        padding: 0px;
        margin: 0px 0px;
    } 

`