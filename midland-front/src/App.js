// import './App.css';
import WeatherWidget from './components/weatherwidget'

const cities = ['Chicago', 'Fort Myers', 'Sioux Falls']


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>Midland Weather</div>
        <WeatherWidget locations={cities}/>
      </div>
    </div>

  );
}

export default App;
