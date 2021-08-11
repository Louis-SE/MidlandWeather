// import './App.css';
import WeatherWidget from './components/weatherwidget'

const cities = ['Chicago', 'FortMyers', 'SiouxFalls']


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
