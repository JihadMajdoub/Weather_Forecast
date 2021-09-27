import { useState } from "react";
import axios from "axios";
import Page from "./components/mainpage/Page.jsx";
import WeatherInfo from "./components/weather-info/WeatherInfo.jsx";
import './app.css';


function App() {

  const API_key = '3e6763d4f81a85062e87bb2aafc55fb5';
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();



  const fetchWeather = async(e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    console.log(res);
    setWeather(res.data);
    }

  return (
    <div className="App">
      {weather ? (<WeatherInfo weather={weather}/>) : (<Page setCity={setCity} fetchWeather={fetchWeather} />)}
    </div>
  );
}

export default App;
