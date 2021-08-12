// import './App.css';
import WeatherWidget from './components/weatherwidget'
import { GlobalStyle } from './GlobalStyles'
import {Wrapper} from './App.styles'

// This determins what cities are displayed in the widget.
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
