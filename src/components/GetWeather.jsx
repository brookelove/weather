import React from "react";
import "../assets/css/components/Forcast.css";
import { useState, useEffect } from "react";
import { getData } from "../data/weather";

const GetWeather=()=> {
    const[weatherData, setWeatherData] = useState(null);
    //chsnge the useState to be the users current location 
    const [city, setCity] = useState('Seattle');
    const[loading, setLoading] = useState(false);

    const getWeather = async () => {
        try{
            const data = await getData(city);
            setWeatherData(data);
            console.log(data)
        }catch(error) {
            console.log(error)
        }
    }
    const handleClickEvent = (e) => {
        setCity(e.target.value);
    }
    const handleButtonClick = () => {
        getWeather();
    }

    useEffect(()=> {
        getWeather();
    }, [])
    return (
        <div>
            <div className="searchContainer bigSearch">
                <input
                placeholder="San Diego"
                className="citySearch "
                onChange={handleClickEvent}
                ></input>
                <button className="searchBttn" onClick={handleButtonClick}>SEARCH</button>
            </div>
            {weatherData !== null ? (
                 <section className="forcastContianer">
                 <h1>{weatherData.location.name}, {weatherData.location.region}</h1>
                 <div className="cardContainer big">
                     <p>Condition: {weatherData.current.text}</p>
                     <p>Wind Direction: {weatherData.current.wind_dir}</p>
                     <div className="iconContainer">
                        <img href={weatherData.current.icon} ></img>
                    </div>
                     <p>Feels Like: {weatherData.current.feelslike_f}F</p>
                     <p>Temp: {weatherData.current.temp_f}F</p>
                     <p>Wind:  {weatherData.current.wind_mph}mph</p>
                     <p>Humidity: {weatherData.current.humidity}</p>
                     <div>UV: {weatherData.current.uv}</div>
                 </div>
                 <div className="cardContainer">
                    <div className="iconContainer"></div>
                     <p>Temp:{weatherData.forecast.forecastday.day.maxtemp_f}</p>
                     <p>Feels Like:</p>
                     <p>Humidity:</p>
                </div>
                 
                 <div className="cardContainer">
                     <div className="iconContainer"></div>
                     <p>Temp:</p>
                     <p>Feels Like:</p>
                     <p>Humidity:</p>
                 </div>
                 <div className="cardContainer">
                     <div className="iconContainer"></div>
                     <p>Temp:</p>
                     <p>Feels Like:</p>
                     <p>Humidity:</p>
                 </div>
                 <div className="cardContainer">
                     <div className="iconContainer"></div>
                     <p>Temp:</p>
                     <p>Feels Like:</p>
                     <p>Humidity:</p>
                 </div>
                 <div className="cardContainer">
                     <div className="iconContainer"></div>
                     <p>Temp:</p>
                     <p>Feels Like:</p>
                     <p>Humidity:</p>
                 </div>
                 <div className="cardContainer">
                     <div className="iconContainer"></div>
                     <p>Temp:</p>
                     <p>Feels Like:</p>
                     <p>Humidity:</p>
                 </div>
       </section>
            ) : null}
           
        </div>
    )
}
export default GetWeather