import React from "react";
import axios from "axios";
import FormattedDate from "./src/FormattedDate";
import WeatherTemperature from "./src/WeatherTemperature";
import "./Weather.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity: response.data.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
      }
    
      function handleCityChange(event) {
        setCity(event.target.value);
      }
      const [weatherData, setWeatherData] = useState({ ready: false });


function handleResponse(response) {
    console.log(response.data);
      };
    )}
    else
     { const apiKey = "b539boe88000efaa4f49550ta07fb443";
       let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
       return "Loading...";
   }}
   import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";import axios from "axios";