// import './App.css';
import WeatherWidget from './components/weatherwidget'
import { GlobalStyle } from './GlobalStyles'
import {Wrapper} from './App.styles'

// Each city in the cities array is sent to the backend to retrieve weather data about that city.
// Only Chicago, FortMyers, and SiouxFalls are currently mapped to anything in the backend so those are currently the
// only cities that will return data.
const cities = ['Chicago', 'FortMyers', 'SiouxFalls']



function App() {
  return (
    <Wrapper className="App">
        <WeatherWidget locations={cities}/>
        <GlobalStyle/>
    </Wrapper>

  );
}

export default App;
