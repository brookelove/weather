import React from "react";
import Landing from "../components/Landing";
// import OneCallForecast from "../components/ONeCallForecast";
import "../assets/css/pages/Home.css";

import GetWeather from "../components/GetWeather";

const Home = () => {
  return (
    <div className="homeContainer">
      <Landing />
      {/* <OneCallForecast /> */}
    </div>
  );
};
export default Home;
