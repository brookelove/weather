import React from "react";
import Forcast from "../components/Forcast";
import Landing from "../components/Landing";
import Music from "../components/Music";
import Goals from "../components/Goals";
import "../assets/css/pages/Home.css";
import GetWeather from "../components/GetWeather";

const Home = () => {
  return (
    <div>
      <Landing />
      <section className="containerBox">
        {/* <GetWeather /> */}
        {/* <Forcast /> */}
        {/* <div className="goalMusic">
          <Music />
          <Goals />
        </div> */}
      </section>
    </div>
  );
};
export default Home;
