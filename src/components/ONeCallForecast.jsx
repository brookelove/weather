import {React, useState, useEfect}from 'react'
import axios from "axios";
const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=`;
const APIKEY = "d83865e8c4925df451bf173012222dc7";
const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=`;
const currentDayURL = `https://api.openweathermap.org/data/2.5/weather?lat=`;

const OneCallForecast = () => {
    const [dailyData, setDailyData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [city, setCity] = (useState(""));
    
    const handleClickEvent = (e) => {
            setCity(e.target.value);
    }
    const searchCity = async () => {
        try {
            const { data } = await axios.get(
              `${geoURL}${city}&limit=1&appid=${APIKEY}`
            );
            let lat = data[0].lat;
            let lon = data[0].lon;
            let fiveFetch = fetch(`${fiveDayURL}${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`);
            let currFetch = fetch(`${currentDayURL}${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`);
            Promise.all([currFetch, fiveFetch])
              .then(async (res) => {
                const currentData = await res[0].json();
                const forecastData = await res[1].json();
                // console.log(currentData);
                // console.log(forecastData);
                setDailyData(currentData);
                setForecastData(forecastData);
              })
              .catch((error) => {
                console.log(error);
              });

        }catch (error) {
            console.log(error);
        }
    }
    console.log(dailyData);
    console.log(forecastData);
    return (
    <>
    <div>ForeCast</div>
    {/* //search box */}
    <input type="text" placeholder='City' onChange={handleClickEvent}></input>
    <button onClick={searchCity}>SEARCH</button>
    {/* //location */}
       {dailyData ? 
       (
        <div>
            <h1>DAILY</h1>
            <h1>{dailyData.name}</h1>
            <p> LONGITUTDE: {dailyData.coord.lon}</p>
            <p>LATITUDE: {dailyData.coord.lat}</p>
            <p>HUMIDITY: {dailyData.main.humidity}</p>
            <p>TEMP: {dailyData.main.temp}</p>
            <p> ICON: {dailyData.weather.icon}</p>
            <p>WIND DEGREE: {dailyData.wind.degree}</p>
            <p>WIND SPEED: {dailyData.wind.speed}</p>
            <p>WIND SPEED: {dailyData.wind.gust}</p>
            <p>SUNRISE: {dailyData.sys.sunrise}</p> 
            <p>SUNSET: {dailyData.sys.sunset}</p> 
            <h1>FORECAST</h1>
            
        </div>
       ):(
        null
       )}
    {/* //cards that hold one through 5 */}
    {/* //temp */}
    </>


  )
}

export default OneCallForecast