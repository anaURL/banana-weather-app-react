import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo"
import axios from "axios";

export default function Weather (props) {
    const [weatherData,setWeatherData] = useState({ready:false});
    const [city,setCity] = useState (props.defaultCity);

    function handleResponse(response) {  
        setWeatherData ({
            ready: true,
            temperature: (Math.round(response.data.main.temp)),
            date: new Date (response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            feelsLike: (Math.round(response.data.main.feels_like)),
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
    }

    function handleSubmit (event) {
    event.preventDefault ();
    search(city);
}

    function handleCityChange (event) {
        setCity(event.target.value);

    }

    function search () {
        const apiKey = `b27f9bdedbf0a33e84256c7e1fd1e262`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse); }

    if (weatherData.ready) { 
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}> 
                    <div className="row"> 
                    <div className= "col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3"> 
                    <input  type="submit" value= "Search" className= "btn btn-primary w-100" />
                    </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                 </div> 
        )
    } 
    else  {
        search ();
    return "Loading..."
}
    
}
