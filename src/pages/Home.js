import React from "react";
import Forcast from "../components/Forcast";
import Landing from "../components/Landing";
import Music from "../components/Music";
import Goals from "../components/Goals";
import "../assets/css/pages/Home.css";

const Home = () => {
  return (
    <div>
      <Landing />
      <section className="containerBox">
        <Forcast />
        {/* <div className="goalMusic">
          <Music />
          <Goals />
        </div> */}
      </section>
    </div>
  );
};
export default Home;
