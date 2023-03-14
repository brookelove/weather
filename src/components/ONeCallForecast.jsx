import {React, useState}from 'react'
import axios from "axios";
import "../assets/css/components/OnceCall.css"
import clearIcon from "../assets/images/weatherIcons/sunnyIcon.jpg";
import rainyIcon from "../assets/images/weatherIcons/rainyIcon.jpg";
import snowIcon from "../assets/images/weatherIcons/snowIcon.jpg";
import darkCloudyIcon from "../assets/images/weatherIcons/darkCloudyIcon.jpg";
import cloudyIcon from "../assets/images/weatherIcons/cloudyIcon.jpg";
import moonIcon from "../assets/images/weatherIcons/moonIcon.png";
import drizzleIcon from "../assets/images/weatherIcons/drizzleIcon.jpg";
import thunderstormIcon from "../assets/images/weatherIcons/thunderstormIcon.jpg";
import sunriseIcon from "../assets/images/icons/sunrise.png";
import sunsetIcon from "../assets/images/icons/sunset.png";

const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=`;
const APIKEY = "d83865e8c4925df451bf173012222dc7";
const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=`;
const currentDayURL = `https://api.openweathermap.org/data/2.5/weather?lat=`;


const OneCallForecast = () => {
    const [dailyData, setDailyData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [city, setCity] = (useState(""));
    let fiveDayArr = [];
    const handleClickEvent = (e) => {
            setCity(e.target.value);
    }
    const renderEachDay = () => {
      let forecast = forecastData.list;
      console.log(forecast.dt_txt)
      for (let i = 0; i < forecast.length -1 ; i++){
        let time = '12:00:00'
        if(forecast[i].dt_txt !== forecast[i+1].dt_txt){
          if(forecast[i].dt_txt.includes(time)){
            fiveDayArr.push(forecast[i]);
          }
        }
      }   
    }
    const convertUnix = (utCode) => {
        let date = new Date(utCode * 1000);
        let string = date.toUTCString();
        let time = string.slice(-11,-4);
        return time;
    }
    const createIcon = (icon)=> {
        let clear = "clear";
        let snow = "snow";
        let rain = "rain";
        let drizzle = "drizzle";
        let thunder = "thunder"
        let clouds = "clouds"
        if(icon.includes(clear)){
            return clearIcon;
        } else if(icon.includes(drizzle)){
            return drizzleIcon;
        } else if (icon.includes(snow)){
            return snowIcon;
        } else if (icon.includes(rain)){
            return rainyIcon;
        } else if (icon.includes(thunder)){
            return thunderstormIcon;
        } else if (icon.includes(clouds)){
            return cloudyIcon;
        } else {
            return darkCloudyIcon;
        }
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
                setDailyData(currentData);
                setForecastData(forecastData);
              })
              .catch((error) => {
                console.log(error);
              });
        } catch (error) {
            if (error instanceof TypeError){
                alert("Make sure you spelled you city correctly")
            }
            console.log(error);
        }
    }
    return (
    <>
    <div>
    <input type="text" placeholder='City' onChange={handleClickEvent} className="searchBarWeather searchBar"></input>
    <button onClick={searchCity} className="button">SEARCH</button>
       {dailyData ? 
       (
        <div className='weatherContainer'>
            <section className='dailyContainer boxShadow'>
                <section className='flexEnd'>
                    <div>
                        {/* <p>LON: {convertUnix(dailyData.coord.lon)}</p>
                        <p>LAT: {convertUnix(dailyData.coord.lat)}</p> */}
                    </div>
                    <h1 className='city'>{dailyData.name}</h1>
                </section>
                <section className='center middleContainer'>
                    <img src={createIcon(dailyData.weather[0].description)} alt={dailyData.weather[0].description} className="dailyIcon"/>
                    <p>{dailyData.weather[0].description}</p>
                    <p className='temperature'>{dailyData.main.temp}°</p>
                    <div className='maxMinContainer'>
                        <p>L: {dailyData.main.temp_min}°</p>
                        <p>H: {dailyData.main.temp_max}°</p>
                    </div>
                </section>
                <section className='spaceBetween'>
                    <div>
                        <p className='alignCenter'><img src={sunriseIcon} alt ="Sunrinse Icon" className="sunriseIcon"/> {convertUnix(dailyData.sys.sunrise)} AM PST</p> 
                        <p className='alignCenter'><img src={sunsetIcon} alt ="Sunset Icon" className="sunsetIcon"/> { convertUnix(dailyData.sys.sunset)} PM PST</p> 
                    </div>
                    <div>
                        <p>WIND: {dailyData.wind.deg}°</p>
                        <p>{dailyData.wind.speed} MPH</p>
                        <p>HUMIDITY: {dailyData.main.humidity}</p>
                    </div>
                </section>    
            </section>
            {renderEachDay()}
            <div className='forecastContainer'>
              {fiveDayArr.map((day) =>{
                console.log(day);
                return(
                    <div className='forecastCard boxShadow'>
                        <div>
                            <img src={createIcon(day.weather[0].description)} alt={day.weather[0].description}className="forecastIcon"/>
                            <p>{day.weather[0].description}</p>
                        </div>
                        <div>
                            <p>{day.main.temp}°</p>
                            <p>HUMIDITY: {day.main.humidity}</p>
                            <p>WIND GUST: {day.wind.speed}</p>
                        </div>
                    </div>
                )
                })}

            </div>
        </div>

       ):(
        <div>
            <img src={moonIcon} alt="moon icon with clouds surrounding it" className='moonIcon'/>
        </div>    
       )}
       </div>
    </>


  )
}

export default OneCallForecast