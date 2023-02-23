import React, {useEffect, useState}from "react";
import Navbar from "../components/Navbar"
import "../assets/css/components/Forcast.css";
import axios from "axios";
import { render } from "@testing-library/react";
const Forcast = () => {
  let apiKey = "ab89816cfc3d4c7890352045232202";
  const [data, setData] = useState(null);
  const [searchBar, setSearchBar] = useState("");


  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey} &q=${searchBar}&days=6&aqi=no&alerts=no`;
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };

  const searchCity = () =>{ 
      axios.get(url).then((response)=> {
        setData(response.data)
        console.log(response.data)
        console.log(response.data.forecast)
      })
  }

  return (
    <div>
      <div className="searchContainer bigSearch">
                <input
                placeholder="San Diego"
                onChange={handleChange}
                value={searchBar}
                className="citySearch "
                ></input>
                <button className="searchBttn" onClick={searchCity}>SEARCH</button>
            </div>
      <section className="forcastContianer">
      <h1>{data.location.name}</h1>
      <div className="cardContainer big">
        <p>{data.current.condition.text}</p>
          <p>{data.current.wind_dir}</p>
          <div className="iconContainer">{data.current.cloud}</div>
          <p>Feels Like: {data.current.feelslike_f} F</p>
          <p>Temp: {data.current.temp_f} F</p>
          <p>Wind: {data.current.gust_mph} mph</p>
          <p>Humidity: {data.current.humidity}</p>
          <div>UV: {data.current.uv}</div>
        </div>
        <div className="cardContainer">
          <div className="iconContainer">
          <p>{data.current.condition.text}</p>
          <p>{data.current.wind_dir}</p>
          </div>
          <p>Temp:{data.current.temp_f}</p>
          <p>Feels Like: {data.current.temp_f}</p>
          <p>Humidity:{data.current.humidity}</p>
          <div>UV: {data.current.uv}</div>
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
    </div>
  );
};
export default Forcast;
