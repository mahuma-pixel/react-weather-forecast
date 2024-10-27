import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"


export default function Weather(props){  const [weatherData, setWeatherData] = useState({ ready: false });
      const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.city,
          });
          };
function search(){const apiKey = "b539boe88000efaa4f49550ta07fb443";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);}

function handleSubmit(event) {
    event.preventDefault();
    search();
  }

function handleCityChange(event) {
    setCity(event.target.value);
  }
return (<div className="weather">
  <div className="container">
  <div className="row">
      <form className="form"  onSubmit={handleSubmit} >
      <input type="search" placeholder="Enter a city" className="useForm col-sm-8" autoFocus="on"
                onChange={handleCityChange}  />
      <input type="submit" value={'Search'} className="submitForm col-sm-3 btn btn-primary" />
  </form>
</div></div>
  <br/>
  <WeatherInfo data={weatherData}/> 
 </div>)}