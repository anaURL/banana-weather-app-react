import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather (props) {
    const [weatherData,setWeatherData] = useState({ready:false});

    function handleResponse(response) {  
        console.log(response.data);
        setWeatherData ({
            ready: true,
            temperature: (Math.round(response.data.main.temp)),
            date: `Sunday 06:00`,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
    }

    if (weatherData.ready) { 
        return (
            <div className="Weather">
              
                <form> 
                    <div className="row"> 
                    <div className= "col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3"> 
                    <input type="submit" value= "Search" className= "btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <br/>
            <div className="row">
                <div className="col-4"> 
        <img src={weatherData.iconUrl} 
        alt={weatherData.description}
        width={60} height={60}/>
        <span className= "temperature"> {weatherData.temperature}</span>
        <span className= "unit"> °C | F </span> 
        </div>
        <div className="col-3"> 
        <div className="parameters">
            Feels like: 
            <span className= "feels-like">  {weatherData.feelsLike} </span> °C
            <br/>
            Humidity:
            <span className= "humidity">  {weatherData.humidity} </span> %
            <br/>
            Wind:
            <span className= "wind"> {weatherData.wind} </span> km/h
            </div>
            </div>
            <div className="col-5"> 
            <h2> {weatherData.city} </h2> 
            <ul> 
                <li> 
                {weatherData.date}
                </li>
                <li className="text-capitalize"> 
                {weatherData.description}
                </li>
            </ul>
            </div>
            </div>
            <br/>
            <div className="row">
                <span > Temperature |  Precipitation   | Wind </span> 
                </div> 
                 </div> 
        )
    } 
    else  {
    const apiKey = `b27f9bdedbf0a33e84256c7e1fd1e262`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading..."
}
    
}
