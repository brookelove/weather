import React, {useEffect, useState}from "react";
import Navbar from "../components/Navbar"
import "../assets/css/components/Forcast.css";
import axios from "axios";
const Forcast = () => {
  let apiKey = "ab89816cfc3d4c7890352045232202";
  const [data, setData] = useState({});
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
      <div className="cardContainer big">
          <div className="iconContainer">{}</div>
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
