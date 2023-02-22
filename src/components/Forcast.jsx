import React, {useState}from "react";
import Navbar from "../components/Navbar"
import "../assets/css/components/Forcast.css";
const Forcast = () => {
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/future.json',
  params: {q: 'London', dt: '2022-12-25'},
  headers: {
    'X-RapidAPI-Key': '2962b99f5emshdc16a10ed6cefa9p1375cdjsne2b97985b9dd',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  const [searchBar, setSearchBar] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };
  return (
    <div>
      <div className="searchContainer bigSearch">
                <input
                placeholder="San Diego"
                onChange={handleChange}
                value={searchBar}
                className="citySearch "
                ></input>
                <button className="searchBttn" id="searchCity">SEARCH</button>
            </div>
      <section className="forcastContianer">
      <div className="cardContainer big">
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
