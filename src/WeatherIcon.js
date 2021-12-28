import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';



export default function WeatherIcon (props) {
  const codeMapping ={ 
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "CLEAR_NIGHT",
    "10n": "CLEAR_NIGHT",
    "11d": "RAIN",
    "11n": "RAIN",
    "12d": "RAIN",
    "12n": "RAIN",
    "13n": "SNOW",
    "13d": "SNOW",
    "50d": "FOG",
    "50n": "FOG",


  }
  
  return ( <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color= "white"
    size={52}
    animate={true}
  />
  );

}