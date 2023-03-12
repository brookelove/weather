import {React, useState, useEfect}from 'react'
import axios from "axios";
import "../assets/css/components/OnceCall.css"
const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=`;
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
        // console.log(forecast[i].dt_txt.includes(time));
        if(forecast[i].dt_txt != forecast[i+1].dt_txt){
          if(forecast[i].dt_txt.includes(time)){
            // console.log(forecast[i]);
            fiveDayArr.push(forecast[i]);
          }
        }
      }
      // return (
      //   fiveDayArr.map((day) =>{
      //           <div>
      //             <p>TEMPERATURE: {day.main.temp}</p>
      //             <p>HUMIDITY: {day.main.humidity}</p>
      //             <p>WIND GUST: {day.wind.gust}</p>
      //             {/* <p>W: {day.werather[0].description}</p> */}
      //           </div>
      //         })
      // )      
    }
    // const renderCards = () => {
    //   console.log(fiveDayArr);
      
    //   // return (
    //   //   fiveDayArr.map((day) =>{
    //   //           <div>
    //   //             <p>TEMPERATURE: {day.main.temp}</p>
    //   //             <p>HUMIDITY: {day.main.humidity}</p>
    //   //             <p>WIND GUST: {day.wind.gust}</p>
    //   //             {/* <p>W: {day.werather[0].description}</p> */}
    //   //           </div>
    //   //         })
    //   //   )
    // }
    // console.log(fiveDayArr);
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
                // renderEachDay();
              })
              .catch((error) => {
                console.log(error);
              });

        }catch (error) {
            console.log(error);
        }
        // renderEachDay();
    }
    // console.log(dailyData);
    // console.log(forecastData);
    return (
    <>
    <div>ForeCast</div>
    {/* //search box */}
    <input type="text" placeholder='City' onChange={handleClickEvent}></input>
    <button onClick={searchCity}>SEARCH</button>
       {dailyData ? 
       (
        <div className='weatherContainer'>
            <h1>DAILY</h1>
            <section className='dailyContainer boxShadow'>
                <section className='flexEnd'>
                    <div>
                        <p>LON: {dailyData.coord.lon}</p>
                        <p>LAT: {dailyData.coord.lat}</p>
                    </div>
                    <h1 className='city'>{dailyData.name}</h1>
                </section>
                <section className='center'>
                    <p>ICON: {dailyData.weather[0].description}</p>
                    <p className='temperature'>{dailyData.main.temp}°</p>
                    <div>
                        <p>MIN: {dailyData.main.temp_min}°</p>
                        <p>MIN: {dailyData.main.temp_max}°</p>
                    </div>
                </section>
                <section className='spaceBetween'>
                    <div>
                        <p>SUNRISE: {dailyData.sys.sunrise}</p> 
                        <p>SUNSET: {dailyData.sys.sunset}</p> 
                    </div>
                    <div>
                        <p>WIND DEGREE: {dailyData.wind.deg}</p>
                        <p>WIND SPEED: {dailyData.wind.speed}</p>
                        {/* <p>WIND SPEED: {dailyData.wind.gust}</p> */}
                        <p>HUMIDITY: {dailyData.main.humidity}</p>
                    </div>
                </section>    
            </section>
            <h1>FORECAST</h1>
            {renderEachDay()}
            <div className='forecastContainer'>
              {fiveDayArr.map((day) =>{
                console.log(day);
                return(
                  <div className=' boxShadow'>
                    <p>TEMPERATURE: {day.main.temp}</p>
                    <p>HUMIDITY: {day.main.humidity}</p>
                    <p>WIND GUST: {day.wind.gust}</p>
                    <p>Icon: {day.weather[0].description}</p>
                  </div>
                )
                })}

            </div>
        </div>
       ):(
        null
       )}
    </>


  )
}

export default OneCallForecast