import React from "react";
import "../assets/css/components/Forcast.css";
import { useState, useEffect } from "react";
import { getData } from "../data/weather";

import neutral from "../assets/images/neutral.jpg" 
import nightSky from "../assets/images/night.jpg"
import clear from "../assets/images/clear.jpg"
import pcloudy from "../assets/images/pcloudy.jpg"

const GetWeather=()=> {
    const[weatherData, setWeatherData] = useState(null);
    //chsnge the useState to be the users current location 
    const[background, setBackground] = useState(neutral) 
    const [city, setCity] = useState('Seattle');
    const[loading, setLoading] = useState(false);

    const getResults = async () => {
        try{
            const data = await getData(city);
            setWeatherData(data);
            console.log(data)
            changeBackground(data);
        }catch(error) {
            console.log(error)
        }
    }
    const changeBackground = (data) => {
        let forecast = data.current.condition.text;
        if(data.current.is_day == 0) {
            setBackground(nightSky)
        } else if (forecast == "Clear" || forecast == "Sunny") {
            setBackground(clear);
        } else if (forecast == "Partially cloudy"){
            setBackground(pcloudy)
        } else {
            setBackground(neutral)
        }
    }
    const handleClickEvent = (e) => {
        setCity(e.target.value);
    }
    const handleButtonClick = () => {
        getResults();
    }
    const uvBackground = (data) => {
        let uv = data.current.uv
        if(uv <= 2){
            //it is low: green
        } else if( uv >=3 && uv <= 7.9) {
            //medium: yellow
        } else if (uv >=8 && uv <=10.9 ) {
            //high: red
            //a modal
        } else {
            //extreme: purple
            //a modal!
        }
    }

    useEffect(()=> {
        getResults();
    }, [])
    return (
        <div>
            <div className="searchContainer bigSearch">
                <input
                placeholder=" San Diego"
                className="citySearch "
                onChange={handleClickEvent}
                ></input>
                <button className="searchBttn" onClick={handleButtonClick}>SEARCH</button>
            </div>
            {weatherData !== null ? (
                 <section className="forcastContianer" >
                 
                
                 <div className="cardContainer big" id="card">
                
                     {/* <img src={weatherData.current.condition.icon}/> */}
                     {/* <p>Wind Direction: {weatherData.current.wind_dir}</p> */}
                     {/* <div className="iconContainer icon" >
                        <img href={weatherData.current.icon} ></img>
                    </div> */}
                    <div className="textContainer">
                     {/* <p>Feels Like: {weatherData.current.feelslike_f}F</p> */}
                     <p>Temp: {weatherData.current.temp_f}F</p>
                     <p>Wind:  {weatherData.current.wind_mph}mph</p>
                     <p>Humidity: {weatherData.current.humidity}</p>
                     <div>UV: {weatherData.current.uv}</div>
                     <div className="cityName">
                        <h1>{weatherData.location.name}, {weatherData.location.region}</h1>
                        <img src={weatherData.current.condition.icon} className="icon"/>
                     </div>
                     </div>
                 </div>
                 <img src={`${background}`} className="imageBackground"/>
       </section>
            ) : null}
           
        </div>
    )
}
export default GetWeather