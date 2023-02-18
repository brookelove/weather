import React, {useState}from "react";
import Navbar from "../components/Navbar"
import "../assets/css/components/Forcast.css";
const Forcast = () => {
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
                <button className="searchBttn">SEARCH</button>
            </div>
      <section className="forcastContianer">
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
