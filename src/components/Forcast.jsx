import React from "react";
import Navbar from "../components/Navbar"
import "../assets/css/components/Forcast.css";
const Forcast = () => {
  return (
    <div>
      <Navbar/>
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
