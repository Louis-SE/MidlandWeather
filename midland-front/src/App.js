// import './App.css';
import WeatherWidget from './components/weatherwidget'

import data from './sample'
const weatherData = [
  {
      city: "Chicago",
      imageURL: "http://openweathermap.org/img/wn/10d@2x.png",
      temperature: 40,
      description: "Obscenely Cloudy"
  },

  {
      city: "Fort Myers",
      imageURL: "http://openweathermap.org/img/wn/10d@2x.png",
      temperature: 44,
      description: "Kinda Cloudy"
  },

  {
      city: "Sioux Falls",
      imageURL: "http://openweathermap.org/img/wn/10d@2x.png",
      temperature: 29,
      description: "Raining but still dry"
  }
]


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>Midland Weather</div>
        <WeatherWidget locationWeatherData={data}/>
      </div>
    </div>

  );
}

export default App;
