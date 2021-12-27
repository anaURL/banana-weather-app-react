import React from "react";
import "./Weather.css";

export default function Weather () {
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
    <img src=" https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    alt="Partly Cloudy"/>
    <span className= "temperature"> 12 </span>
    <span className= "unit"> °C | F </span> 
    </div>
    <div className="col-3"> 
    <div className="parameters">
        Precipitation: 
        <span className= "precipitation">  4 </span> % 
        <br/>
        Humidity:
        <span className= "humidity">  84 </span> %
        <br/>
        Wind:
        <span className= "wind"> 6 </span> km/h
        </div>
        </div>
        <div className="col-5"> 
        <h2> San Diego, CA, USA</h2> 
        <ul> 
            <li> 
                Sunday 06:00
            </li>
            <li> 
                Partly Cloudy
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
