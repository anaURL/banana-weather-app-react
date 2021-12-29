import React from "react"
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"


export default function WeatherInfo (props) {
    return  ( 
    <div className="WeatherInfo"> 
    <div className="row">
        <div className="col-4"> 
        <WeatherIcon code={props.data.icon}/>  
        <WeatherTemperature celsius={props.data.temperature}/>
    </div>
    <div className="col-3"> 
         <div className="parameters">
        Feels like: 
        <span className= "feels-like">  {props.data.feelsLike} </span> °C
        <br/>
        Humidity:
        <span className= "humidity">  {props.data.humidity} </span> %
         <br/>
        Wind:
         <span className= "wind"> {props.data.wind} </span> km/h
         </div>
         </div>
    <div className="col-5"> 
    <h2> {props.data.city} </h2> 
        <ul> 
        <li> 
        <FormattedDate date= {props.data.date}/>
        </li>
         <li className="text-capitalize"> 
        {props.data.description}
        </li>
        </ul>
        </div>
    </div>
   

    </div> 
    
    );
}