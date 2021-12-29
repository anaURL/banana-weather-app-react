import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather defaultCity= "San Diego"/>
        <footer> 
            This project was coded by <a href="https://github.com/bananakodira" target="_blank" rel="noreferrer"> Ana Urlic, </a> {""}{""} and is {""}
            <a href="https://github.com/bananakodira/banana-weather-app-react" target="_blank" rel="noreferrer" > 
        open sourced on GitHub {""}</a> 
        and <a href="https://wizardly-pare-10ddc2.netlify.app" target="_blank" rel="noreferrer"> hosted on Netlify.</a>
        </footer>
      </div>
      </div>
  ); }